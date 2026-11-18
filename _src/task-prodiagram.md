# 任务：产出 prodiagram 组的工具 demo 页

你负责的 slug：lucidchart drawio gliffy omnigraffle creately moqups whimsical

## 你的复刻配方（必须照着画，这是质量基线）

### lucidchart
（accent #f24726 橙红，底色 #ffffff）
画「订单系统架构图」：标准分层——Client → API Gateway → 3 个微服务（Order / Payment / Inventory）→ 数据库 + 消息队列。矩形直角或小圆角、1.5px 描边、蓝灰色系填充（#e8eef7 / #dbe7f5），连线是正交折线带小箭头，容器用虚线大框标注 "AWS VPC"。字体是干净的无衬线。加一个小 AI 生成提示框浮层（"Describe your diagram…"）。

### drawio
（accent #f08705 橙，底色 #ffffff + 网格）
画「AWS 三层架构」：使用 draw.io 经典形状语言——矩形 + 圆角 0、描边 1px #000、填充白/浅色；节点里放简化云图标（EC2 方块、S3 桶、RDS 圆柱、Lambda λ）；用带折角的正交连线；整体有淡淡的 10px 网格背景；右上角一个形状库面板缩略（Basic / AWS / UML / Network 四组小图标）。

### gliffy
（accent #1f5fbf，底色 #f4f6fa）
画「Confluence 内嵌的流程图」：一个模拟的 Confluence 页面框架（顶部页面标题栏 + 面包屑），中间嵌着流程图——开始/结束用胶囊，判断用菱形，矩形用浅蓝填充，连线细而规整；页面右侧留白。强调"它就长在你 wiki 里"的嵌入感。

### omnigraffle
（accent #2c2c2e，底色 #ffffff，Mac 质感）
画「iOS 应用导航结构」：极其精确、细线（1px）、优雅的节点布局；用浅灰填充 + 深灰描边，箭头是细长实心三角；文字用 SF 风格的小字号；右上角一个 stencil 面板（4 个图形缩略：矩形/圆/菱形/圆角矩形）；整体是"印刷级精度"的观感，与 draw.io 的工具感拉开。

### creately
（accent #7b61ff，底色 #fbfbfd）
画「BPMN 采购审批流程」：泳道（申请人 / 主管 / 财务），BPMN 形状语言——圆角矩形任务、菱形网关（带 ×）、圆形事件（细描边）、虚线消息流；配色用紫/青/橙的柔和填充。左侧一个形状库侧栏（Flowchart / BPMN / UML / Mind Map 标签）。

### moqups
（accent #2f6fed，底色 #ffffff）
画「移动端注册流程线框 + 流程」：3 个手机线框（灰阶占位：状态栏、输入框、按钮），用箭头串起来；下方一条对应的流程图（简化矩形）。线框必须是**灰阶 wireframe 风格**（#eee 填充、#ccc 边框、灰色占位条），这是它和其他工具最大的区别。

### whimsical
（accent #6b4eff，底色 #ffffff）
画「产品流程图」：Whimsical 标志性的"干净到发光"风格——大圆角（12px）、柔和粉彩填充（薄荷绿 #d9f2e6、淡紫 #e8e2ff、浅黄 #fff3cd）、极细描边、无阴影；节点文字短而居中；连线是平滑曲线（贝塞尔）带小圆点端点。整体留白大、呼吸感强。

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
