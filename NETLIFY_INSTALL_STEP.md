# Netlify部署步骤 - GitHub应用安装

## 当前页面：GitHub应用安装设置

你现在看到的是GitHub的Netlify应用安装页面，需要配置Netlify访问GitHub仓库的权限。

## 正确操作步骤

### 1. 检查仓库访问权限设置
- 当前页面已经默认选择了「All repositories」（所有仓库）选项
- 这个设置是正确的，允许Netlify访问你的所有GitHub仓库，包括 `liangwenbin504/youxi`
- 权限选项也已经默认勾选了所有必要的权限

### 2. 完成安装
- **点击页面底部的绿色「Install」按钮**
  - 这个按钮位于页面底部左侧
  - 点击后会完成Netlify应用的安装
  - 然后会自动返回Netlify部署页面

### 3. 安装后的流程
- 安装成功后，会回到Netlify的仓库选择页面
- 你需要在仓库列表中找到并选择 `liangwenbin504/youxi` 仓库
- 接着配置部署设置：
  - Branch to deploy: 选择 `master`
  - Build command: 留空
  - Publish directory: 留空
- 最后点击「Deploy site」开始部署

## 关键点
- 不需要修改任何权限设置，默认选项已经足够
- 直接点击「Install」按钮即可继续

现在点击绿色的「Install」按钮，完成Netlify应用的安装吧！