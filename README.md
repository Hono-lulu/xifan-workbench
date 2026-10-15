# 稀饭专属工作台 · 打包工程

「稀饭专属工作台」桌面(EXE) + 手机(APK) 安装包构建工程。

- `desktop/` — Electron 应用，GitHub Actions 在 Windows 镜像打包 `.exe`(NSIS 安装器)
- `android/` — WebView 应用，GitHub Actions 在 Android 镜像打包 `.apk`
- 应用内容为**在线加载**云端工作台，与网页版数据实时一致

## 手动触发构建
GitHub Actions → `Build EXE & APK` → Run workflow。
产物在上方 Artifacts 中下载：`windows-exe`、`android-apk`。
