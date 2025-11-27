# 智慧糟老头 - 游戏化学习平台

## 项目介绍

这是一个基于HTML、CSS和JavaScript开发的游戏化学习平台，专为小学生设计，包含语文、数学、品德、英语、科学五个学科的游戏化练习题。

## 功能特点

- 🎮 **游戏化学习**：通过图形化游戏提高学习兴趣
- 👥 **用户认证**：支持学生身份验证和Excel数据导入
- 📊 **学习记录**：自动记录学习进度和成绩
- 📱 **响应式设计**：适配各种设备尺寸
- 🏆 **个性化评价**：根据得分给出评价

## 项目结构

```
├── index.html              # 主界面
├── login.html              # 登录界面
├── css/                    # 样式文件
├── js/                     # JavaScript代码
├── games/                  # 游戏HTML文件
└── lib/                    # 第三方库
```

## 一键部署指南

### 推荐平台：Vercel

Vercel是一个现代化的静态网站部署平台，提供免费HTTPS、CDN加速等功能，非常适合部署HTML应用。

### 部署步骤

#### 方法1：通过Vercel CLI部署（推荐）

1. **安装Vercel CLI**（仅需安装一次）
   ```bash
   npm install -g vercel
   ```

2. **在项目根目录执行部署命令**
   ```bash
   vercel --prod
   ```

3. **按照提示完成部署**
   - 登录Vercel账号
   - 确认部署配置
   - 等待部署完成

#### 方法2：通过Vercel网页控制台部署

1. 登录Vercel控制台：https://vercel.com
2. 点击"New Project"
3. 选择"Upload"
4. 拖拽项目文件夹到上传区域
5. 点击"Deploy"

### 部署配置

| 配置项 | 推荐值 | 说明 |
|--------|--------|------|
| 框架预设 | Static HTML | 选择静态HTML框架 |
| 根目录 | ./ | 项目根目录 |
| 构建命令 | 空 | 无需构建步骤 |
| 输出目录 | 空 | 无需指定输出目录 |
| 环境变量 | 空 | 无需配置环境变量 |

### 访问验证

1. **获取部署URL**
   - 部署完成后，Vercel会生成一个唯一的URL（如：https://your-project.vercel.app）

2. **电脑端验证**
   - 直接在浏览器中访问部署URL
   - 测试登录、学科选择、游戏功能

3. **手机端验证**
   - 打开手机浏览器
   - 输入部署URL
   - 测试响应式设计和触摸交互

4. **跨浏览器测试**
   - Chrome
   - Firefox
   - Safari
   - Edge

### 多设备测试方法

#### 使用浏览器开发者工具

1. 打开部署URL
2. 按F12打开开发者工具
3. 点击"Toggle device toolbar"按钮（Ctrl+Shift+M）
4. 选择不同设备尺寸进行测试

#### 使用在线测试工具

- **BrowserStack**：https://www.browserstack.com/
- **LambdaTest**：https://www.lambdatest.com/

## 本地开发

### 启动本地服务器

#### 使用Python

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### 使用Node.js

```bash
# 安装http-server
npm install -g http-server

# 启动服务器
http-server -p 8000
```

### 访问本地应用

在浏览器中访问：http://localhost:8000

## 技术栈

- HTML5
- CSS3
- JavaScript (ES6+)
- SheetJS（Excel导入）

## 浏览器支持

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 许可证

MIT License

## 联系方式

如有问题或建议，请联系开发团队。
