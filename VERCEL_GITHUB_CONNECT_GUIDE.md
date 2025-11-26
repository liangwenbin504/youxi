# Vercel 部署操作指南（当前页面）

你现在看到的是 Vercel 的 "Let's build something new" 页面，这是部署流程的第二步。接下来需要 **安装 GitHub 应用** 来连接你的 GitHub 仓库。

## 操作步骤：

### 1. 安装 GitHub 应用

**点击页面中间的 `Install` 按钮**（黑色按钮，带有 GitHub 图标）。

这将跳转到 GitHub 的授权页面，让 Vercel 能够访问你的 GitHub 仓库。

### 2. 授权 Vercel 访问 GitHub 仓库

在 GitHub 授权页面上：

- 选择你的 GitHub 账号（如果有多个账号）
- 选择 **"Only select repositories"**（只选择特定仓库）
- 在下拉菜单中，**选择 `liangwenbin504/youxi` 仓库**
- 点击 **"Install & Authorize"** 按钮

### 3. 返回 Vercel 继续部署

授权完成后，页面会自动返回 Vercel。此时你会看到：

- 左侧列表中显示你的 GitHub 账号
- 账号下方显示你选择的 `youxi` 仓库

### 4. 选择仓库并部署

- 点击 `youxi` 仓库（在你的 GitHub 账号下方）
- Vercel 会自动检测你的项目类型（静态网站）
- 点击 **"Deploy"** 按钮开始部署

### 5. 等待部署完成

部署过程通常需要 1-2 分钟，你会看到：

- 部署进度条
- 部署日志（显示各个步骤）
- 部署成功后的绿色提示

### 6. 获取访问域名

部署成功后，你会获得一个免费的 Vercel 域名，格式为：
`your-project-name.vercel.app`

例如：`youxi.vercel.app`

## 注意事项：

- 确保选择 **"Only select repositories"** 而不是 "All repositories"，这样更安全
- 只选择你需要部署的 `youxi` 仓库即可
- 如果授权后返回 Vercel 没有看到仓库，**刷新页面** 试试
- 部署过程中不要关闭浏览器窗口

按照以上步骤操作，你就能成功将你的 `youxi` 项目部署到 Vercel 上了！