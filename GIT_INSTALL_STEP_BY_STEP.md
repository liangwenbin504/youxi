# Win10系统Git安装详细步骤

## 1. 选择合适的安装包

从Git官网的Install页面（Windows选项卡），你可以看到以下几个选项：

| 选项类型 | 适合情况 | 推荐指数 |
|---------|---------|---------|
| **x64 版本**（最新版） | 64位Win10系统（绝大多数电脑） | ⭐⭐⭐⭐⭐ |
| ARM64 版本 | ARM架构的Win10系统（如Surface Pro X） | ⭐⭐⭐ |
| 便携版 | 需要在U盘上使用Git | ⭐⭐ |
| winget工具安装 | 熟悉命令行的用户 | ⭐⭐⭐ |

### 推荐选择
对于Win10系统，**强烈推荐选择x64版本**，因为：
- 绝大多数Win10电脑都是64位架构
- 最新版包含所有功能和安全更新
- 安装过程简单，适合初学者

## 2. 具体选择步骤

1. 在Git官网的Install页面，确保已选中`Windows`选项卡
2. 点击第一个链接：`Click here to download the latest (2.52.0) x64 version of Git for Windows`
   - 这是最新的64位Git安装包
   - 文件名类似：`Git-2.52.0-64-bit.exe`

## 3. 安装过程

下载完成后，双击安装包开始安装，按照以下步骤操作：

1. **使用许可声明**：点击`Next`
2. **选择安装路径**：保持默认路径（`C:\Program Files\Git`），点击`Next`
3. **选择安装组件**：保持默认选项，建议勾选：
   - ✅ Git LFS (Large File Support)
   - ✅ Add a Git Bash Profile to Windows Terminal
4. **选择开始菜单文件夹**：保持默认，点击`Next`
5. **选择Git默认编辑器**：建议选择`Visual Studio Code`（如果已安装），否则保持默认的`Vim`
6. **调整PATH环境**：选择`Git from the command line and also from 3rd-party software`，点击`Next`
7. **选择HTTPS后端传输**：保持默认的`Use the OpenSSL library`，点击`Next`
8. **配置行尾符号转换**：保持默认的`Checkout Windows-style, commit Unix-style line endings`，点击`Next`
9. **配置终端模拟器**：选择`Use Windows' default console window`，点击`Next`
10. **配置额外选项**：保持默认选项，点击`Next`
11. **开始安装**：点击`Install`，等待安装完成
12. **完成安装**：点击`Finish`

## 4. 验证安装

安装完成后，验证Git是否成功安装：

1. 右键桌面空白处，选择`Git Bash Here`
2. 在弹出的终端中，输入命令：
   ```bash
   git --version
   ```
3. 如果显示类似`git version 2.52.0.windows.1`的版本信息，说明安装成功！

## 5. 下一步

安装完成后，你可以开始按照`DEPLOY_GUIDE.md`中的步骤，将项目部署到Netlify。

---

**注意**：如果你的电脑是非常特殊的ARM架构（如Surface Pro X），请选择ARM64版本的安装包。