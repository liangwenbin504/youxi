# Netlify部署指南

## 1. 登录Netlify
1. 打开浏览器，访问 [Netlify官网](https://www.netlify.com/)
2. 点击右上角的「Sign in」或「Sign up」
3. 选择「Continue with GitHub」，使用你的GitHub账号登录
4. 授权Netlify访问你的GitHub账号

## 2. 导入GitHub仓库
1. 登录后，你会看到Netlify的控制面板
2. 点击「Add new site」按钮，选择「Import an existing project」
3. 选择「GitHub」作为Git提供商
4. 在仓库列表中找到并选择 `liangwenbin504/youxi` 仓库
5. 点击「Install」按钮，授权Netlify访问这个仓库

## 3. 配置部署设置
1. 在「Configure your site」页面中：
   - **Branch to deploy**: 选择 `master`
   - **Build command**: 留空（因为这是静态网站，不需要构建过程）
   - **Publish directory**: 留空（因为HTML文件直接在根目录）

2. 点击「Deploy site」按钮开始部署

## 4. 等待部署完成
1. 部署过程会在Netlify上显示进度
2. 部署完成后，Netlify会生成一个随机域名（例如：https://random-name.netlify.app）
3. 你可以点击这个域名来查看部署的网站

## 5. 自定义域名（可选）
如果你想使用自己的域名，可以：
1. 点击「Site settings」→「Domain management」
2. 点击「Add custom domain」
3. 按照提示添加你的域名并配置DNS

## 6. 验证部署
1. 访问Netlify生成的域名
2. 检查网站是否能正常加载
3. 测试所有页面和链接是否正常工作

## 7. 后续更新
当你在本地修改代码并推送到GitHub后，Netlify会自动检测到变化并重新部署网站。你不需要手动触发部署。

## 常见问题解决
1. **部署失败**：查看Netlify的构建日志，检查是否有错误信息
2. **网站无法访问**：检查GitHub仓库是否有正确的HTML文件，确保Publish directory设置正确
3. **自动部署不触发**：检查Netlify是否有正确的Webhook配置

## 成功标志
- Netlify显示「Site is published」
- 访问生成的域名能看到你的游戏项目
- 代码修改后自动重新部署

恭喜！你的游戏项目已经成功部署到Netlify上了！