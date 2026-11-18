# 任务：产出 whiteboard 组的工具 demo 页

你负责的 slug：miro mural figjam ziteboard novastart

## 你的复刻配方（必须照着画，这是质量基线）

### miro
（accent #4262ff，浅灰白板底 #f7f7f8）
画一张「产品启动工作坊」白板：3 个手写体标题框（Sticky notes 便签，黄 #fff9b1 / 粉 #ffd6e8 / 蓝 #cfe8ff，轻微旋转 -3°~3°、投影），围绕一个大的圆形 cluster；用粗蓝箭头连接；右下角放一个「Miro 工具栏」浮条（指针/便签/形状/连线/评论/计时器图标）；画 2 个彩色协作光标 + 名字标签（"Yuki"、"Marco"）。点阵网格底纹。

### mural
（accent #ff0066，底色 #fbfbfa）
画「Design Sprint」工作坊：顶部一条横向的 5 阶段流程带（Understand / Sketch / Decide / Prototype / Test），每阶段是一个大圆角矩形区域，内含 3–4 张便利贴；左下角放一个「Voting」贴纸簇（带小圆点票数 3/5/2）；右上角一个 session 头像组。整体比 Miro 更"模板化、分区感强"。

### figjam
（accent #0d99ff，底色 #ffffff）
画「用户旅程地图」：一条横向泳道，上方 5 个阶段列（Discover / Consider / Buy / Use / Renew），下方情绪曲线（手绘感折线 + emoji 节点 😀🙂😐🙁），再下方 sticky notes 簇（FigJam 标志性的亮色便签 + 圆角、粗描边）。加一个 cursor 标签 "Aki" 和一个 stamp（👍）。字体圆润。

### ziteboard
（accent #1a9be0，底色纯白无限画布）
画「在线数学辅导」场景：一块干净白板上手写公式 `∫₀¹ x² dx = 1/3`（用 SVG path 或手写字体近似）、一个手绘坐标轴曲线、一个 PDF 截图占位框（浅灰 + 文件名标签）、右侧一个小 zoom 控件（+ / 100% / −）与协作头像。视觉要"极度干净、线条细、无装饰"，与 Miro 的丰富贴纸形成对比。

### novastart
（accent #6c5ce7，底色 #0f0f12 深色）
画「无限画布 OS」：深色无限画布上漂浮 3 个应用窗口（一个终端、一个浏览器、一个 AI agent 对话面板），窗口有细边框和标题栏；中间用虚线连到一条时间线/版本节点；画 2 个 agent 光标标签（"Claude"、"agent-2"）。整体是"桌面操作系统搬进画布"的观感，霓虹紫强调色。

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
