# 将项目部署到 Netlify 的详细步骤

## 1. 环境准备

### 1.1 安装 Git
#### Windows 系统安装步骤（Win10/Win11）：
1. 访问 [Git 官网](https://git-scm.com/downloads)
2. 在官网首页，点击顶部导航栏的 "Install" 选项
3. 在 Install 页面，点击 "Windows" 选项卡
4. **选择适合的安装包**：
   - 对于绝大多数 Win10/Win11 电脑（64位架构），**强烈推荐选择 x64 版本**
   - 点击链接：`Click here to download the latest (2.52.0) x64 version of Git for Windows`
   - 文件名类似：`Git-2.52.0-64-bit.exe`
   - 只有特殊 ARM 架构的电脑（如 Surface Pro X）才需要选择 ARM64 版本
5. 双击下载的 `.exe` 安装文件，开始安装
6. 安装过程按照以下步骤操作：
   - **使用许可声明**：点击`Next`
   - **选择安装路径**：保持默认路径（`C:\Program Files\Git`），点击`Next`
   - **选择安装组件**：保持默认选项，建议勾选：
     - ✅ Git LFS (Large File Support)
     - ✅ Add a Git Bash Profile to Windows Terminal
   - **选择开始菜单文件夹**：保持默认，点击`Next`
   - **选择Git默认编辑器**：建议选择`Visual Studio Code`（如果已安装），否则保持默认的`Vim`
   - **调整PATH环境**：选择`Git from the command line and also from 3rd-party software`，点击`Next`
   - **选择HTTPS后端传输**：保持默认的`Use the OpenSSL library`，点击`Next`
   - **配置行尾符号转换**：保持默认的`Checkout Windows-style, commit Unix-style line endings`，点击`Next`
   - **配置终端模拟器**：选择`Use Windows' default console window`，点击`Next`
   - **配置额外选项**：保持默认选项，点击`Next`
   - **开始安装**：点击`Install`，等待安装完成
   - **完成安装**：点击`Finish`
7. 安装完成后，右键桌面空白处，选择 "Git Bash Here" 打开终端
8. 在终端中运行 `git --version` 验证安装成功
   - 如果显示类似`git version 2.52.0.windows.1`的版本信息，说明安装成功！

#### macOS 系统安装步骤：
1. 访问 [Git 官网](https://git-scm.com/downloads)
2. 点击 "macOS" 选项卡
3. 下载并安装 Xcode Command Line Tools 或 Homebrew 安装

#### Linux 系统安装步骤：
1. 打开终端
2. 根据你的发行版运行相应命令：
   - Ubuntu/Debian: `sudo apt-get install git`
   - CentOS/Fedora: `sudo yum install git`

### 1.2 注册/登录 Netlify
- 访问 [Netlify 官网](https://www.netlify.com/) 注册或登录账号

## 2. 初始化 Git 仓库

### 2.1 初始化本地仓库
在项目根目录（`e:\youxi\`）执行以下命令：

```bash
git init
git config user.name "你的名字"
git config user.email "你的邮箱"
```

### 2.2 创建 .gitignore 文件
在项目根目录创建 `.gitignore` 文件，添加不需要版本控制的文件：

```
# 日志文件
*.log

# 操作系统文件
.DS_Store
Thumbs.db

# 编辑器文件
.vscode/
*.swp
*.swo
*~

# 临时文件
*.tmp
*.temp

# Excel 文件（如果不需要版本控制）
mingdan.xlsx
```

## 3. 提交本地代码

```bash
# 添加所有文件到暂存区
git add .

# 提交代码到本地仓库
git commit -m "初始化项目"
```

## 4. 部署到 Netlify

### 4.1 方法一：通过 Netlify 网站部署

1. 登录 Netlify 后台
2. 点击 "Add new site" → "Import an existing project"
3. 选择 "GitHub" 作为 Git 提供商（需要先连接 GitHub 账号）
4. 在 GitHub 上创建一个新仓库，将本地代码推送到 GitHub：
   ```bash
   # 在 GitHub 上创建仓库后，执行以下命令
   git remote add origin https://github.com/你的用户名/仓库名.git
   git push -u origin main
   ```
5. 在 Netlify 上选择刚刚创建的 GitHub 仓库
6. 配置部署设置：
   - **Build command**: 留空（静态网站不需要构建）
   - **Publish directory**: 留空（项目根目录）
7. 点击 "Deploy site" 开始部署

### 4.2 方法二：通过 Netlify CLI 部署

1. 安装 Netlify CLI：
   ```bash
   npm install -g netlify-cli
   ```

2. 登录 Netlify CLI：
   ```bash
   netlify login
   ```

3. 在项目根目录执行部署命令：
   ```bash
   netlify init
   ```
   - 选择 "Create & configure a new site"
   - 选择团队（或使用默认）
   - 为站点命名（或使用默认）
   - 配置部署设置（同方法一）

4. 部署完成后，执行以下命令将代码推送到 Netlify：
   ```bash
   netlify deploy --prod
   ```

## 5. 更新项目

### 5.1 方法一：通过 Git 更新

1. 在本地修改代码后，提交更改：
   ```bash
   git add .
   git commit -m "更新内容描述"
   git push origin main
   ```

2. Netlify 会自动检测到 GitHub 仓库的变化，自动重新部署

### 5.2 方法二：通过 Netlify CLI 更新

1. 在本地修改代码后，执行：
   ```bash
   netlify deploy --prod
   ```

## 6. 验证部署

部署完成后，你可以通过以下方式验证：

1. 访问 Netlify 分配的域名（如 `https://classy-buttercream-5c19be.netlify.app/`）
2. 检查网站内容是否与本地项目一致
3. 测试各个游戏链接是否正常工作

## 7. 常见问题及解决方案

### 7.1 部署后页面显示空白
- 检查 Publish directory 配置是否正确
- 检查 index.html 文件是否存在且格式正确
- 查看 Netlify 部署日志，查找错误信息

### 7.2 游戏链接无法打开
- 检查文件名是否正确（注意大小写）
- 确保所有游戏 HTML 文件都已提交到 Git 仓库
- 检查浏览器控制台是否有错误信息

### 7.3 Git 命令无法执行
- 确保 Git 已正确安装
- 检查环境变量是否配置正确
- 尝试重新启动命令行终端

## 8. 项目结构说明

```
├── index.html              # 游戏主界面
├── 三黑和土地.html          # 游戏文件1
├── 习作：学写倡议书.html    # 游戏文件2
├── 图形化游戏.html          # 游戏文件3
├── 第一版（只有一个地球）.html # 游戏文件4
├── 青山不老.html            # 游戏文件5
├── 青山不老（最终版）.html   # 游戏文件6
├── 1763633297203.jpg       # 图片资源1
├── 风格图片.png             # 图片资源2
└── mingdan.xlsx            # 数据文件
```

主界面 `index.html` 会自动识别目录中的 HTML 文件并生成游戏列表，无需手动维护。

---

按照以上步骤操作，你就能成功将项目部署到 Netlify 并保持更新。如果遇到任何问题，可以查看 Netlify 文档或搜索相关错误信息。