# demo-kit 约定（所有工具 demo 页必须遵守）

产物目录：/Users/bytedance/Documents/agent/freestyle/designs/diagrams/
- tools/<slug>.html   每个工具一页（slug 见清单）
- index.html          总览（主持人写，worker 不写）
- assets/shots/<slug>.png  官网真实截图（已采集，直接引用）
- assets/lib/         本地库：mermaid.min.js、excalidraw.bundle.js/.css、tldraw.bundle.js/.css
- tools/<slug>.html 引用本地资源请用相对路径 ../assets/...

## 页面结构（固定四段，不要增删）
1. header：工具名 + 一句话定位（<=30 字）+ 元信息行（类别 / 平台 / 价格 / 目标用户）
2. 「它画出来是什么样」：核心区。SVG/HTML 复刻该工具的标志性产出（架构图/流程图/思维导图/白板/站点图/时序图…），必须体现该工具独有的视觉语言（线宽、圆角、配色、字体、手绘感、网格/点阵背景等）。能嵌真库的（mermaid/excalidraw/tldraw）嵌真库并给可编辑的代码/画布。
3. 「官网原样」：<img src="../assets/shots/<slug>.png"> 真实截图，配 1-2 句说明。
4. 「定位与差异」：它是什么、谁在用、和最近邻的 2 个工具差在哪（各一句话），一句话结论「什么时候选它」。

## 视觉要求
- 单页自包含，无外部 CDN 依赖（离线可开）。除嵌入库外不引任何网络资源。
- 深色或浅色皆可，但每页要贴合该工具自身品牌气质（例如 napkin 明亮活泼、eraser 深色工程风、yEd 亮绿）。
- 字体用 system-ui 栈；中文文案，工具名保留英文。
- 响应式：宽度 >= 1100px 时主体两栏或居中 1100px 容器。
- 页脚统一一行：`DesignBookmark 30 图工具调研 · <slug> · demo 为风格复刻，非官方产品`

## 真实性红线
- 不得虚构价格、用户数、融资、公司名。价格/平台不确定就写「价格见官网」。
- 复刻图里的内容要贴合该工具真实典型用例（不要用「Lorem ipsum」）。
