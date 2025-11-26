# Netlify部署 - 分支名称自动消失问题解决方案

## 问题描述
在Netlify部署配置页面，手动输入分支名称 `main` 后，分支名称会自动消失，导致无法继续部署。

## 可能原因
1. **仓库同步延迟**：刚创建的GitHub仓库需要时间与Netlify同步
2. **Netlify界面问题**：有时Netlify的部署界面会出现临时性的加载问题
3. **浏览器缓存问题**：浏览器缓存可能导致页面显示异常

## 解决方案

### 方案1：强制刷新页面
1. 按下 `Ctrl + Shift + R`（或 `Cmd + Shift + R` on Mac）进行**强制刷新**
2. 等待页面重新加载后，再次尝试部署配置
3. 检查分支下拉菜单是否显示分支选项

### 方案2：尝试不同的浏览器
- 如果当前使用Chrome，尝试使用Firefox或Edge
- 不同浏览器可能对Netlify界面的兼容性更好

### 方案3：使用Netlify CLI部署（推荐替代方案）
如果Web界面一直有问题，可以使用Netlify CLI工具部署，步骤如下：

#### 1. 安装Netlify CLI
```bash
npm install -g netlify-cli
```

#### 2. 登录Netlify
```bash
netlify login
```

#### 3. 部署网站
在项目根目录运行：
```bash
netlify deploy
```

#### 4. 配置部署
- 当提示 "No site id specified, create a new site" 时，选择 `Y`
- 选择一个团队（如果有）
- 为网站命名（可选，默认为随机名称）
- 当提示 "Publish directory" 时，直接按回车（因为HTML文件在根目录）

#### 5. 完成部署
- 部署成功后，会得到一个预览URL
- 要发布生产版本，运行：
  ```bash
  netlify deploy --prod
  ```

### 方案4：检查GitHub仓库状态
1. 打开浏览器，访问 `https://github.com/liangwenbin504/youxi`
2. 确认仓库是否已创建成功
3. 确认仓库中是否有文件（应该能看到你的HTML文件）
4. 确认仓库的默认分支是 `main`

### 方案5：等待一段时间后重试
- 刚创建的仓库可能需要5-10分钟同步信息
- 等待一段时间后，重新访问Netlify部署页面
- 尝试重新配置部署

## 重要提示
- 静态HTML网站不需要复杂的构建配置
- 确保你的仓库中包含 `index.html` 文件
- 部署成功后，Netlify会生成一个随机域名

如果以上方案都无法解决问题，我们可以考虑使用其他静态网站托管服务，如Vercel或GitHub Pages。

## GitHub Pages替代方案
如果Netlify一直有问题，你可以尝试使用GitHub Pages，步骤更简单：

1. 打开GitHub仓库 `https://github.com/liangwenbin504/youxi`
2. 点击 "Settings" 选项卡
3. 滚动到 "Pages" 部分
4. 在 "Source" 下拉菜单中，选择 `main` 分支
5. 点击 "Save"
6. 等待几分钟，你的网站就会通过 `https://liangwenbin504.github.io/youxi` 访问

这个方案可能更适合你的情况，因为它直接使用GitHub，不需要额外的第三方服务。