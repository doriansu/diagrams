# 任务：产出 ai 组的工具 demo 页

你负责的 slug：napkin explainviz yed

## 你的复刻配方（必须照着画，这是质量基线）

### napkin
（accent #38bdf8，底色 #ffffff）
画「文本 → 视觉」：左侧一段被高亮选中的文字（浅蓝底 `#e0f2fe`，关键词加粗），右侧由它生成的流程图——**柔和粉彩**填充（浅蓝 #dbeafe、浅绿 #dcfce7、浅粉 #fce7f3）、虚线圆角连接、每个节点配一个线条小图标（📄✏️⚡）；背景是极淡的点阵。整体轻盈、非工程感。

### explainviz
（accent #7c3aed，底色 #ffffff）
画「科研图形摘要（graphical abstract）」：左侧实验组（3 个圆形细胞图标 + 箭头），中间机制（分子/通路示意，用同心圆和箭头），右侧结果（柱状图 + 显著性星号 `***`）；配色是学术期刊风（蓝紫 + 橙 + 灰）；外围加一个「Figure 1」标注和比例尺。强调"可导出 SVG、可编辑"。

### yed
（accent #7ab800 亮绿，底色 #ffffff）
画「自动布局的网络图」：30+ 节点密集但**排列极其规整**（这是 yEd 的卖点：自动布局算法）——用分层布局（hierarchical），节点是小圆角矩形，边是带箭头的细线，部分边有标签；左下角放一个 "Layout: Hierarchical / Organic / Orthogonal" 的下拉选择器。整体是"图论工具"的密集感。

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
