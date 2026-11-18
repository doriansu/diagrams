# 任务：产出 live 组的工具 demo 页

你负责的 slug：excalidraw tldraw

**特别注意**：本组两个页面嵌的是真库（Excalidraw / tldraw），不是复刻。已验证可用：
- `../assets/lib/excalidraw.bundle.js` + `excalidraw.bundle.css` —— 挂载到 `<div id="root">`，内置初始手绘架构图
- `../assets/lib/tldraw.bundle.js` + `tldraw.bundle.css` —— 挂载到 `<div id="root">`，完整白板
容器需固定高度（如 520px），页面其余内容放在容器外。

## 你的复刻配方（必须照着画，这是质量基线）

### excalidraw
—— 用 `../assets/lib/excalidraw.bundle.js` + `.css`，页面里放一个 `<div id="root" style="height:520px">`。bundle 已内置一张"API Gateway → Order Service → Postgres"手绘架构图作为初始场景，直接可用。上方或下方配一段说明（它的手绘风格 = rough.js + Virgil 字体）。**不要重复引入 React**，bundle 自带。
注意：bundle 会撑满 `#root`，容器必须给定高度，且该页其余内容在容器外。

### tldraw
—— 用 `../assets/lib/tldraw.bundle.js` + `.css`，同样 `<div id="root" style="height:520px">`，自带完整白板（工具栏、页面、缩放）。说明它的定位：可嵌入的无限画布 SDK，`<Tldraw />` 一行接入。

---

# 任务：为指定工具产出「风格复刻 demo 页」

你在为一个调研项目生产页面：把 30 个画图/白板工具，各做一个本地 HTML demo 页，让用户不用注册试用就能直观看到「这个工具画出来的东西长什么样」。

## 先读这些（必须）

1. `/Users/bytedance/Documents/agent/freestyle/designs/diagrams/src/demo-kit.md` —— 页面结构与红线约定，必须遵守。
2. `/Users/bytedance/Documents/agent/freestyle/designs/diagrams/assets/facts.md` —— 30 个工具的事实底稿（来自 DesignBookmark 详情页 + 官网首页）。只读你负责的那几个。
3. `/Users/bytedance/Documents/agent/freestyle/designs/diagrams/tools/mermaid.html` —— 已完成的**样板页**。结构、CSS 用法、文案语气照它写。
4. `/Users/bytedance/Documents/agent/freestyle/designs/diagrams/assets/kit.css` —— 共享样式，**直接引用，不要改它**（每个页面在 `<style>` 里覆盖 `:root` 的 `--accent/--bg/--panel/--ink` 即可贴合品牌色）。
5. 每个工具的官网真实截图 `/Users/bytedance/Documents/agent/freestyle/designs/diagrams/assets/shots/<slug>.png` —— **用 Read 工具看图**，复刻的视觉语言必须来自你看到的真实画面，不是凭记忆。

## 你要交付什么

对清单里每个 slug，写一个 `/Users/bytedance/Documents/agent/freestyle/designs/diagrams/tools/<slug>.html`，严格四段结构：

- **header**：工具名 + 一句话定位（≤30 字）+ 元信息行（类别 / 平台 / 价格 / 目标用户）
- **01 它画出来是什么样**：核心。用手写 SVG/HTML **复刻该工具的标志性产出**，必须体现它独有的视觉语言：线宽、圆角、配色、字体、手绘感、点阵/网格背景、节点样式、连线风格。内容用该工具真实典型用例（架构图 / 用户流程图 / 站点图 / 时序图 / 思维导图 / 白板拼贴 / 线框稿…），不要 Lorem ipsum。
- **02 官网原样**：引用真实截图 + 1-2 句解读。
- **03 定位与差异**：它是什么、谁在用、和最近邻 2 个工具各一句话差别、一句「什么时候选它」。

## 硬性要求

- 单页自包含，**离线可开**：除了 `../assets/kit.css`、`../assets/lib/*`、`../assets/shots/*.png`，不得引用任何网络资源（无 CDN、无 Google Fonts、无外链图片）。
- 中文文案，工具名保留英文。语气克制、具体，禁止营销腔。
- **不得虚构**价格、用户数、融资、公司归属。事实以 `facts.md` 为准；不确定就写「价格见官网」。近邻对比可以用你的产品知识，但不要编造具体数字。
- 页面宽度 ≥1100px 时用居中 `--maxw` 容器。
- 页脚统一：`DesignBookmark 30 图工具调研 · <slug> · demo 为风格复刻，非官方产品`

## 自检（必做，别跳）

写完后用 ego-browser 逐页截图自查。每个页面都要看，看复刻图有没有错位、溢出、文字压线、颜色脏、空白过多。

```bash
ego-browser nodejs <<'EOF'
const task = await taskSpace("verify my demos");
const page = task.page("p1");
for (const slug of ["slug1","slug2"]) {
  await page.goto("file:///Users/bytedance/Documents/agent/freestyle/designs/diagrams/tools/" + slug + ".html", { timeout: 25000 });
  await page.waitForTimeout(700);
  await page.screenshot({ path: "/tmp/verify-" + slug + ".png", fullPage: true });
}
await task.finish({ keep: [] });
EOF
```

然后用 Read 工具看 `/tmp/verify-*.png`，发现问题就改，最多两轮。**不要把有肉眼可见排版错误的页面交付。**

## 边界

- 只写你清单里的 `<slug>.html` 文件。不要碰 `index.html`、`kit.css`、`assets/`、别人的页面。
- 不要 git 操作，不要装依赖。
- 完成后回复：每个页面的路径 + 一句「复刻了什么图 + 用了什么视觉语言」+ 自检截图是否通过。
