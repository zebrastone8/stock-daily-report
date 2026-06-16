# 发布说明

这套站点优先走 GitHub Pages，不需要先买服务器。

## 你现在要做的事

1. 找回或登录 GitHub 账号。
2. 新建一个仓库，例如 `stock-daily-report`。
3. 把本地 `site/` 目录里的文件上传到仓库。
4. 在仓库设置里打开 Pages。
5. 选择从 `main` 分支发布，目录选择仓库根目录。

发布后，GitHub 会给你一个公开地址，通常类似：

```text
https://你的用户名.github.io/stock-daily-report/
```

## 本地文件结构

```text
site/
  index.html
  PUBLISHING.md
  assets/
    site.css
    site.js
  reports/
    latest.html
    2026-06-16-0909.html
```

## 每天自动更新的目标形态

以后每次生成报告时，自动化做三件事：

1. 生成新的归档报告：`reports/YYYY-MM-DD-HHMM.html`
2. 更新固定入口：`reports/latest.html`
3. 更新报告底部的历史归档列表

`index.html` 只负责把网站根目录带到最新报告，不做额外首页。

然后把这些文件推送到 GitHub，GitHub Pages 会自动刷新网站。

## 为什么现在不买服务器

这个项目不需要自己买机器跑模型。模型计算由 OpenAI API 完成，网站只是展示 HTML。前期用 GitHub Pages 托管页面，复杂度最低。

只有当你以后需要 24 小时常驻私有采集程序，例如长期在线的 Futu OpenD、数据库或内部 API，才需要考虑小服务器。

## 后续升级路线

### 阶段 1：本地生成，GitHub Pages 发布

Codex 每天定时生成报告，本地把 HTML 推送到 GitHub。适合继续读取你本地的 Futu/MCP 数据。

### 阶段 2：GitHub Actions 云端生成

把报告生成逻辑整理成脚本，放到 GitHub Actions 定时运行。OpenAI API key 放在 GitHub Secrets 里，不放在网页代码里。

### 阶段 3：小服务器

只有在需要常驻私有数据采集时再买。服务器只负责采集和调 API，不需要高算力。
