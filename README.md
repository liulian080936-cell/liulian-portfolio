# LIULIAN Portfolio

这是一个静态作品集站点。长期维护最稳的方式是把它放进 Git 仓库，然后用自动部署发布 `dist/`。

## 本地开发

```bash
npm run dev
```

打开 `http://127.0.0.1:4173`

## 打包发布

```bash
npm run build
```

构建结果会输出到 `dist/`。

## 发布到线上

推荐两种方式：

1. GitHub Pages
2. Cloudflare Pages

如果用 Cloudflare Pages，构建命令填 `npm run build`，发布目录填 `dist`。
如果用 GitHub Pages，这个仓库已经带了 GitHub Actions 工作流，推到 `main` 后会自动构建 `dist/` 并发布。

## 以后怎么维护

- 首页文案和页面逻辑在 `script.js`
- 样式在 `styles.css`
- 项目图片清单在 `assets/projects/manifest.js`
- 新图直接放进 `assets/`
- 图片上线前先跑 `npm run optimize:images`，再执行 `npm run build`
- 首页和项目/海报归档现在都用轻量版 `.webp`，发布包只会打包页面实际引用的图片
- 每次改完后重新执行 `npm run build`

不要手工改 `dist/`，它应该永远是构建产物。
