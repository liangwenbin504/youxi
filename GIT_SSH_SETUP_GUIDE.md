# Git SSH 密钥设置与 PowerShell 命令指南

## 一、终端输出问题分析

从终端输出可以看出，你遇到了以下几个问题：

### 1. 无效的代理设置
你设置了三个无效的代理配置：
- `http.proxy http://proxy.example.com:8080` （无效示例地址）
- `http.proxy socks5://proxy.example.com:1080` （无效示例地址）
- `https.proxy socks5://proxy.example.com:1080` （无效示例地址）

### 2. SSH 目录不存在
尝试访问 `~/.ssh` 目录时出现错误，说明你的电脑上还没有生成 SSH 密钥。

### 3. PowerShell 命令兼容性问题
使用了 Linux 风格的 `ls -la` 命令，而 PowerShell 不支持该参数格式。

## 二、解决方案

### 步骤 1：清除无效的代理设置

首先，我们需要清除那些无效的代理配置：

```powershell
# 清除 HTTP 代理
git config --global --unset http.proxy

# 清除 HTTPS 代理
git config --global --unset https.proxy
```

### 步骤 2：生成 SSH 密钥

既然 `.ssh` 目录不存在，我们需要生成 SSH 密钥：

```powershell
# 生成 SSH 密钥（一路按 Enter 键即可）
ssh-keygen -t rsa -b 4096 -C "你的GitHub邮箱"
```

执行成功后，会显示类似以下输出：
```
Your identification has been saved in /c/Users/Administrator/.ssh/id_rsa.
Your public key has been saved in /c/Users/Administrator/.ssh/id_rsa.pub.
```

### 步骤 3：查看生成的 SSH 密钥

使用 PowerShell 兼容的命令查看 SSH 密钥：

```powershell
# 查看 SSH 密钥目录
Get-ChildItem ~/.ssh

# 查看公钥内容（用于后续添加到GitHub）
Get-Content ~/.ssh/id_rsa.pub
```

### 步骤 4：添加 SSH 密钥到 GitHub

1. 复制 `id_rsa.pub` 文件的内容
2. 登录 GitHub，进入 Settings → SSH and GPG keys → New SSH key
3. 粘贴公钥内容，点击 "Add SSH key"

### 步骤 5：测试 SSH 连接

```powershell
# 测试 SSH 连接到 GitHub
ssh -T git@github.com
```

首次连接会提示确认，输入 `yes` 后按 Enter。

成功连接会显示：
```
Hi liangwenbin504! You've successfully authenticated, but GitHub does not provide shell access.
```

### 步骤 6：修改远程仓库 URL 为 SSH 协议

将之前的 HTTPS 远程地址改为 SSH 地址：

```powershell
# 查看当前远程地址
git remote -v

# 修改为 SSH 地址
git remote set-url origin git@github.com:liangwenbin504/your-repo-name.git
```

### 步骤 7：设置必要的 Git 配置

```powershell
# 设置用户名
git config --global user.name "liangwenbin504"

# 设置邮箱
git config --global user.email "你的GitHub邮箱"

# 设置提交编码
git config --global i18n.commitencoding utf-8

# 设置日志编码
git config --global i18n.logoutputencoding utf-8
```

## 三、PowerShell 常用 Git 命令对照表

| Linux 命令 | PowerShell 等效命令 | 说明 |
|------------|---------------------|------|
| `ls -la` | `Get-ChildItem -Force` | 显示所有文件（包括隐藏文件） |
| `cd` | `cd` 或 `Set-Location` | 切换目录 |
| `pwd` | `pwd` 或 `Get-Location` | 显示当前目录 |
| `mkdir` | `mkdir` 或 `New-Item -ItemType Directory` | 创建目录 |
| `rm` | `rm` 或 `Remove-Item` | 删除文件/目录 |
| `cat` | `cat` 或 `Get-Content` | 查看文件内容 |

## 四、后续操作建议

1. **使用 GitHub Desktop**（推荐）：
   - 下载安装：https://desktop.github.com/
   - 登录 GitHub 账号
   - 添加本地仓库 `E:\youxi`
   - 点击 "Push origin" 推送代码

2. **使用浏览器直接上传**：
   - 登录 GitHub，进入你的仓库
   - 点击 "Add file" → "Upload files"
   - 拖拽 `E:\youxi` 目录下的所有文件上传

3. **检查网络连接**：
   - 确保你的网络可以访问 GitHub
   - 关闭可能影响连接的防火墙或 VPN

## 五、常见问题排查

### 1. SSH 连接超时
```powershell
# 增加 SSH 超时时间
git config --global ssh.timeout 600
```

### 2. 权限问题
```powershell
# 确保 SSH 密钥文件权限正确
icacls ~/.ssh/id_rsa /inheritance:r
icacls ~/.ssh/id_rsa /grant:r $env:USERNAME:"(R)"
icacls ~/.ssh/id_rsa.pub /inheritance:r
icacls ~/.ssh/id_rsa.pub /grant:r $env:USERNAME:"(R)"
```

### 3. 查看 Git 配置
```powershell
# 查看所有 Git 配置
git config --global --list
```

## 六、验证设置成功

完成上述步骤后，尝试推送代码：

```powershell
# 进入项目目录
cd E:\youxi

# 添加所有文件
git add .

# 提交代码
git commit -m "first commit"

# 推送代码
git push -u origin main
```

如果推送成功，说明你的 Git 和 SSH 设置已经正确配置。

---

**注意**：如果仍然遇到网络问题，建议优先使用 GitHub Desktop 或浏览器上传方式，这些方法通常更稳定且易于操作。