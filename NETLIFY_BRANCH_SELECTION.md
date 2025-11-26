# Netlify部署步骤 - 分支选择与配置

## 当前页面：部署配置页面

你现在在Netlify的部署配置页面，需要设置部署的分支和构建参数。

## 关键发现：

从页面右侧可以看到，你的仓库正在部署的是 `main` 分支，而不是 `master` 分支。这是因为 **GitHub现在的默认分支名称是 `main`**，而不是以前的 `master`。

## 正确操作步骤

### 1. 选择部署分支
- **在「Branch to deploy」下拉菜单中选择 `main`**
  - 这是你GitHub仓库的默认分支
  - 页面右侧已经显示正在部署 `main` 分支

### 2. 配置其他参数
- **Base directory**: 留空（默认为根目录）
- **Build command**: 留空（静态网站不需要构建）
- **Publish directory**: 留空（HTML文件在根目录）
- **Functions directory**: 留空或保持默认值（不需要函数）

### 3. 开始部署
- 配置完成后，点击页面底部的「Deploy site」按钮
- 等待部署完成
- 部署成功后，Netlify会生成一个随机域名

## 关键点
- GitHub现在默认分支是 `main`，而不是 `master`
- 你的仓库使用的是 `main` 分支，所以选择 `main` 即可
- 静态网站不需要构建命令和特定的发布目录

现在选择 `main` 分支，然后点击「Deploy site」按钮开始部署吧！