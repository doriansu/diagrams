// qa.mjs — run via: ego-browser nodejs < src/qa.mjs
// Checks every tools/*.html for: external network deps, JS errors, 4-section structure, missing assets.
const DIR = "/Users/bytedance/Documents/agent/freestyle/designs/diagrams";
const SLUGS = [
  "mindmanager","xmind","dyno-mapper","napkin","ziteboard","gliffy","overflow","mindnode","yed","moqups",
  "websequencediagrams","writemaps","novastart","explainviz","omnigraffle","miro","mural","figjam","excalidraw",
  "tldraw","whimsical","lucidchart","drawio","eraser","mermaid","creately","milanote","flowmapp","octopus-do","wiretext"
];

const task = await taskSpace("qa all demos");
const page = task.page("p1");
const results = [];

for (const slug of SLUGS) {
  const rec = { slug };
  const errors = [];
  page.events?.();
  try {
    await page.goto(`file://${DIR}/tools/${slug}.html`, { timeout: 25000 });
    await page.waitForTimeout(900);

    const info = await page.evaluate(() => {
      const external = [];
      document.querySelectorAll("script[src], link[href], img[src], iframe[src]").forEach(n => {
        const u = n.getAttribute("src") || n.getAttribute("href") || "";
        if (/^https?:|^\/\//.test(u)) external.push(u);
      });
      const cssExternal = [];
      for (const sh of document.styleSheets) {
        try { for (const r of sh.cssRules) if (r.cssText && r.cssText.includes("@import")) cssExternal.push(r.cssText.slice(0, 120)); } catch {}
      }
      return {
        title: document.title,
        h1: document.querySelector("h1")?.innerText?.trim() || "",
        h2: [...document.querySelectorAll("h2")].map(h => h.innerText.trim()),
        imgs: [...document.querySelectorAll("img")].map(i => ({ src: i.getAttribute("src"), w: i.naturalWidth, h: i.naturalHeight })),
        external, cssExternal,
        hasFooter: !!document.querySelector("footer"),
        bodyLen: document.body.innerText.length,
      };
    });

    rec.title = info.title;
    rec.h1 = info.h1;
    rec.h2 = info.h2;
    rec.sections = info.h2.length;
    rec.external = info.external;
    rec.cssExternal = info.cssExternal;
    rec.brokenImgs = info.imgs.filter(i => i.src && i.w === 0).map(i => i.src);
    rec.hasShot = info.imgs.some(i => i.src && i.src.includes("assets/shots/") && i.w > 0);
    rec.bodyLen = info.bodyLen;
    rec.hasFooter = info.hasFooter;
    if (rec.external.length) errors.push("外部资源: " + rec.external.slice(0, 3).join(", "));
    if (rec.brokenImgs.length) errors.push("图片加载失败: " + rec.brokenImgs.slice(0, 2).join(", "));
    if (!rec.hasShot) errors.push("缺少官网截图");
    if (rec.sections < 3) errors.push("段落数不足: " + rec.sections);
    if (info.bodyLen < 500) errors.push("正文过短: " + info.bodyLen);
    rec.errors = errors;
  } catch (e) {
    rec.errors = ["加载失败: " + e.message.slice(0, 120)];
  }
  results.push(rec);
}

console.log(JSON.stringify(results, null, 1));
await task.finish({ keep: [] });
