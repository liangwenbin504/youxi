# SSH 密钥生成详细步骤指南

## 当前进度
从终端输出可以看到，你已经成功：
1. 清除了无效的代理设置
2. 执行了 SSH 密钥生成命令
3. 系统已自动创建 `.ssh` 目录

现在系统正在提示你设置密码：
```
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
```

## 后续操作步骤

### 步骤 1：确认 SSH 密钥保存路径

当前系统默认提供了密钥保存路径：`C:\Users\Administrator/.ssh/id_rsa`

**操作**：直接按 `Enter` 键确认使用默认路径

### 步骤 2：设置密钥密码（可选）

确认路径后，系统会提示：
```
Enter passphrase (empty for no passphrase):
```

**操作建议**：
- 直接按 `Enter` 键跳过密码设置（方便后续使用）
- 如果你希望设置密码，输入密码后按 `Enter`，然后再次确认密码

### 步骤 3：完成密钥生成

成功设置后，系统会显示类似以下输出：
```
Your identification has been saved in C:\Users\Administrator/.ssh/id_rsa.
Your public key has been saved in C:\Users\Administrator/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx 415583468@qq.com
The key's randomart image is:
+---[RSA 4096]----+
|                 |
|                 |
|                 |
|                 |
|                 |
|                 |
|                 |
|                 |
|                 |
+----[SHA256]-----+
```

### 步骤 4：查看并复制公钥内容

密钥生成完成后，需要查看并复制公钥内容：

#### PowerShell 命令：
```powershell
# 查看公钥内容
Get-Content ~/.ssh/id_rsa.pub
```

#### 或使用记事本打开：
```powershell
# 使用记事本打开公钥文件
notepad ~/.ssh/id_rsa.pub
```

**操作**：
1. 复制公钥的完整内容（从 `ssh-rsa` 开始到邮箱结束）
2. 确保没有复制多余的空格或换行符

### 步骤 5：添加公钥到 GitHub

1. 登录 GitHub（https://github.com）
2. 点击右上角头像 → **Settings**
3. 在左侧菜单中点击 **SSH and GPG keys**
4. 点击右上角 **New SSH key**
5. 在 **Title** 字段中输入一个描述（例如：`Windows PC`）
6. 在 **Key** 字段中粘贴你刚才复制的公钥内容
7. 点击 **Add SSH key**

### 步骤 6：测试 SSH 连接

回到 PowerShell 终端，执行以下命令测试连接：

```powershell
# 测试 SSH 连接到 GitHub
ssh -T git@github.com
```

**预期输出**：
- 首次连接会提示：`The authenticity of host 'github.com (xxx.xxx.xxx.xxx)' can't be established.`
- 输入 `yes` 后按 `Enter`
- 成功连接会显示：`Hi liangwenbin504! You've successfully authenticated, but GitHub does not provide shell access.`

### 步骤 7：修改远程仓库 URL 为 SSH 协议

执行以下命令将远程仓库 URL 从 HTTPS 改为 SSH：

```powershell
# 查看当前远程 URL
git remote -v

# 修改为 SSH URL（请替换为你的实际仓库名）
git remote set-url origin git@github.com:liangwenbin504/your-repo-name.git
```

### 步骤 8：推送代码到 GitHub

```powershell
# 推送代码到 GitHub
git push -u origin main
```

**预期输出**：
- 显示推送进度
- 最终显示：`Branch main set up to track remote branch main from origin.`

## 常见问题与解决方案

### 问题 1：忘记 GitHub 仓库名
- 登录 GitHub 查看你的仓库列表
- 或使用以下命令查看当前配置的远程 URL：
  ```powershell
  git remote -v
  ```

### 问题 2：SSH 连接失败
- 检查防火墙设置，确保 SSH 端口 22 未被阻止
- 确保公钥已正确添加到 GitHub
- 重新生成密钥并重新添加

### 问题 3：推送时提示权限不足
- 确保你的 GitHub 账号有仓库的推送权限
- 检查 SSH 密钥是否已正确关联到你的账号

## 后续操作

1. 成功推送代码后，回到 Vercel 部署页面
2. 刷新页面，Vercel 会自动检测到代码变化
3. 点击 "Deploy" 按钮开始部署
4. 等待部署完成，获取部署 URL

## 推荐替代方案

如果你在 SSH 配置过程中遇到困难，推荐使用 **GitHub Desktop**：

1. 下载安装：https://desktop.github.com/
2. 登录 GitHub 账号
3. 点击 "Add local repository"
4. 选择 `E:\youxi` 目录
5. 点击 "Push origin" 按钮推送代码

GitHub Desktop 会自动处理 SSH 密钥和推送过程，更加简单易用。

---

**提示**：完成 SSH 密钥设置后，你可以使用 `GIT_SSH_SETUP_GUIDE.md` 文件中的内容进行进一步的 Git 配置调整。