# GitHub 添加 SSH 密钥详细指南

## 当前状态
你已经成功登录到 GitHub 仪表板，现在需要将生成的 SSH 公钥添加到你的 GitHub 账户中。

## 步骤 1：获取 SSH 公钥内容

首先，回到 PowerShell 终端，执行以下命令获取公钥内容：

```powershell
# 使用 PowerShell 命令查看公钥内容
Get-Content ~/.ssh/id_rsa.pub
```

**预期输出**：
```
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC...（中间省略）...+w== 415583468@qq.com
```

**操作**：
1. 复制完整的公钥内容（从 `ssh-rsa` 开始，到 `415583468@qq.com` 结束）
2. 确保没有复制多余的空格或换行符

## 步骤 2：在 GitHub 上添加 SSH 密钥

### 详细操作步骤：

1. **打开 GitHub 设置页面**：
   - 在 GitHub 仪表板右上角，点击你的头像
   - 在下拉菜单中选择 **Settings**（设置）

2. **进入 SSH 和 GPG 密钥页面**：
   - 在左侧菜单中，向下滚动找到 **SSH and GPG keys**（SSH 和 GPG 密钥）
   - 点击进入该页面

3. **添加新的 SSH 密钥**：
   - 点击页面右上角的 **New SSH key**（新建 SSH 密钥）按钮
   - 或点击 **Add SSH key**（添加 SSH 密钥）按钮

4. **填写密钥信息**：
   - 在 **Title**（标题）字段中，输入一个描述性名称（例如：`Windows PC` 或 `我的电脑`）
   - 在 **Key**（密钥）字段中，粘贴你刚才复制的 SSH 公钥内容

5. **保存 SSH 密钥**：
   - 点击绿色的 **Add SSH key**（添加 SSH 密钥）按钮
   - 如果你开启了双重认证，需要输入验证码进行验证

### 可视化操作流程：

```
GitHub 仪表板 → 右上角头像 → Settings → SSH and GPG keys → New SSH key → 填写 Title 和 Key → Add SSH key
```

## 步骤 3：验证 SSH 连接

添加完成后，回到 PowerShell 终端，执行以下命令验证 SSH 连接：

```powershell
# 测试 SSH 连接到 GitHub
ssh -T git@github.com
```

**预期输出**：
- 首次连接会提示：`The authenticity of host 'github.com (xxx.xxx.xxx.xxx)' can't be established.`
- 输入 `yes` 后按 `Enter` 键确认
- 成功连接会显示：`Hi liangwenbin504! You've successfully authenticated, but GitHub does not provide shell access.`

## 步骤 4：修改远程仓库 URL 为 SSH 协议

现在需要将远程仓库的 URL 从 HTTPS 改为 SSH 协议：

### 查看当前远程 URL
```powershell
# 查看当前远程仓库 URL
git remote -v
```

### 修改为 SSH URL
```powershell
# 修改远程仓库 URL 为 SSH 协议（请替换为你的实际仓库名）
git remote set-url origin git@github.com:liangwenbin504/your-repo-name.git
```

### 确认修改成功
```powershell
# 再次查看远程仓库 URL，确认已修改为 SSH 协议
git remote -v
```

**预期输出**：
```
origin  git@github.com:liangwenbin504/your-repo-name.git (fetch)
origin  git@github.com:liangwenbin504/your-repo-name.git (push)
```

## 步骤 5：推送代码到 GitHub

现在可以使用 SSH 协议推送代码到 GitHub 了：

```powershell
# 推送代码到 GitHub
git push -u origin main
```

**预期输出**：
- 显示推送进度信息
- 最终显示：`Branch main set up to track remote branch main from origin.`

## 常见问题与解决方案

### 问题 1：不知道 GitHub 仓库名
- 登录 GitHub，查看你的仓库列表
- 或使用以下命令查看当前配置的远程 URL：
  ```powershell
  git remote -v
  ```

### 问题 2：SSH 连接测试失败
- 检查公钥是否完整复制
- 确认公钥已正确添加到 GitHub
- 确保防火墙未阻止 SSH 端口 22

### 问题 3：推送时提示权限不足
- 确保你的 GitHub 账号有仓库的推送权限
- 检查 SSH 密钥是否已正确关联到你的账号

## 后续操作

1. 成功推送代码后，回到 Vercel 部署页面
2. 刷新页面，Vercel 会自动检测到代码变化
3. 点击 "Deploy" 按钮开始部署
4. 等待部署完成，获取部署 URL

## 替代方案

如果你在 SSH 配置过程中遇到困难，推荐使用 **GitHub Desktop**：

1. 下载安装：https://desktop.github.com/
2. 登录 GitHub 账号
3. 点击 "Add local repository"
4. 选择 `E:\youxi` 目录
5. 点击 "Push origin" 按钮推送代码

GitHub Desktop 会自动处理 SSH 密钥和推送过程，更加简单易用。

---

**提示**：如果你需要查看更多关于 Git 和 GitHub 的操作指南，可以查看 `E:\youxi` 目录下的其他指南文件。