# 部署步骤指南

## 1. 在GitHub上创建仓库
1. 打开浏览器，登录GitHub账号（用户名：liangwenbin504）
2. 点击右上角的「+」号，选择「New repository」
3. 在「Repository name」字段中输入：`game-project`
4. 选择「Public」（公开仓库）
5. **不要勾选**「Initialize this repository with a README」、「Add a .gitignore」或「Choose a license」
6. 点击「Create repository」按钮
7. 创建成功后，复制页面中显示的HTTPS URL（格式：https://github.com/liangwenbin504/game-project.git）

## 2. 连接本地仓库到GitHub
在E:\youxi目录下执行以下命令：

```powershell
# 添加远程仓库（将URL替换为你复制的实际URL）
& 'C:\Program Files\Git\bin\git.exe' remote add origin https://github.com/liangwenbin504/game-project.git

# 验证远程仓库配置
& 'C:\Program Files\Git\bin\git.exe' remote -v
```

## 3. 暂存并提交修改
```powershell
# 暂存所有修改
& 'C:\Program Files\Git\bin\git.exe' add .

# 提交修改
& 'C:\Program Files\Git\bin\git.exe' commit -m "初始提交 - 游戏项目"
```

## 4. 推送到GitHub
```powershell
# 推送代码到GitHub
& 'C:\Program Files\Git\bin\git.exe' push -u origin master
```

## 5. 部署到Netlify
1. 打开浏览器，访问 [Netlify官网](https://www.netlify.com/)
2. 点击「Sign up」注册账号（或使用GitHub账号登录）
3. 登录后，点击「Add new site」→「Import an existing project」
4. 选择「GitHub」作为Git提供商
5. 授权Netlify访问你的GitHub账号
6. 在仓库列表中选择：`liangwenbin504/game-project`
7. 配置部署设置：
   - Branch to deploy: `master`
   - Build command: 留空（因为这是静态网站）
   - Publish directory: 留空（因为HTML文件在根目录）
8. 点击「Deploy site」按钮
9. 等待部署完成，Netlify会生成一个随机域名

## 6. 验证部署
1. 部署完成后，点击Netlify提供的域名链接
2. 确认网站能正常访问，检查所有页面和链接
3. 后续修改代码后，只需提交并推送到GitHub，Netlify会自动重新部署

## 常见问题解决
- 如果推送失败，检查GitHub账号权限和网络连接
- 如果部署失败，检查Netlify的构建日志
- 确保所有HTML文件使用相对路径引用资源

## 成功标志
- GitHub仓库显示你的代码
- Netlify部署状态为「Published」
- 访问Netlify提供的域名能看到你的游戏项目

祝你部署成功！