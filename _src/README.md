# _src — 构建源码（不参与部署）

这个目录**不会被 GitHub Pages 访问**（下划线开头，且不在页面引用中），
只是为了重建 `assets/lib/` 里的真库 bundle 时留底。

## 重建 Excalidraw bundle

```bash
npm install
npx esbuild _src/excalidraw-entry.jsx --bundle --minify \
  --loader:.woff2=file --conditions=production \
  --define:process.env.NODE_ENV='"production"' \
  --outfile=assets/lib/excalidraw.bundle.js
```

CSS 与字体文件需要从 `node_modules/@excalidraw/excalidraw/dist/` 一并拷到 `assets/lib/`。

## 重建 tldraw bundle

```bash
npx esbuild _src/tldraw-entry.jsx --bundle --minify \
  --conditions=production \
  --define:process.env.NODE_ENV='"production"' \
  --outfile=assets/lib/tldraw.bundle.js
```

## 其他文件

| 文件 | 用途 |
| --- | --- |
| `qa.mjs` | 全量检查 30 个页面（外链、裂图、段落数、正文长度） |
| `recipes.md` | 每个工具的视觉复刻配方 |
| `demo-kit.md` | 页面结构约定 |
| `facts/` | 采集到的官网事实与元数据 |
| `task-*.md` | 派发给 worker 的任务书（历史存档） |
