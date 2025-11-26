# PowerShell脚本：检查并修复Git仓库

# 切换到工作目录
Set-Location -Path "E:\youxi"

# 输出当前目录
Write-Host "当前目录：$(Get-Location)"

# 1. 初始化Git仓库
Write-Host "\n1. 初始化Git仓库..."
git init

# 2. 查看当前分支
Write-Host "\n2. 当前分支："
git branch

# 3. 创建并切换到main分支
Write-Host "\n3. 创建并切换到main分支..."
git checkout -b main

# 4. 查看当前状态
Write-Host "\n4. 当前仓库状态："
git status

# 5. 暂存所有文件
Write-Host "\n5. 暂存所有文件..."
git add .

# 6. 查看暂存状态
Write-Host "\n6. 暂存后状态："
git status

# 7. 提交初始版本
Write-Host "\n7. 提交初始版本..."
git commit -m "Initial commit"

# 8. 查看提交历史
Write-Host "\n8. 提交历史："
git log --oneline -n 5

# 9. 添加远程仓库
Write-Host "\n9. 添加远程仓库..."
git remote add origin https://github.com/liangwenbin504/youxi.git

# 10. 查看远程配置
Write-Host "\n10. 远程配置："
git remote -v

# 11. 强制推送到origin main分支
Write-Host "\n11. 强制推送到origin main分支..."
git push -f origin main

# 12. 再次查看提交历史
Write-Host "\n12. 最终提交历史："
git log --oneline -n 5

Write-Host "\n✅ Git操作完成！"