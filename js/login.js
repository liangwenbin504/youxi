// 登录逻辑
class LoginManager {
    constructor() {
        this.init();
    }

    init() {
        // 绑定登录表单提交事件
        const loginForm = document.getElementById('loginForm');
        loginForm.addEventListener('submit', (e) => this.handleLogin(e));

        // 绑定Excel导入按钮点击事件
        const importBtn = document.getElementById('importBtn');
        importBtn.addEventListener('click', () => this.handleImport());
    }

    // 处理登录表单提交
    handleLogin(e) {
        e.preventDefault();
        
        const idCard = document.getElementById('idCard').value.trim();
        const name = document.getElementById('name').value.trim();
        const errorMessage = document.getElementById('errorMessage');

        // 表单验证
        if (!this.validateIdCard(idCard)) {
            errorMessage.textContent = '请输入有效的身份证号';
            return;
        }

        if (!name) {
            errorMessage.textContent = '请输入姓名';
            return;
        }

        // 查找学生
        const student = studentDB.findStudent(idCard, name);
        if (student) {
            // 登录成功，保存当前用户信息
            this.setCurrentUser(student);
            // 跳转到主界面
            window.location.href = 'index.html';
        } else {
            errorMessage.textContent = '身份信息未找到，请联系老师添加';
        }
    }

    // 验证身份证号格式
    validateIdCard(idCard) {
        const regex = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        return regex.test(idCard);
    }

    // 处理Excel导入
    handleImport() {
        const fileInput = document.getElementById('excelFile');
        const file = fileInput.files[0];
        const errorMessage = document.getElementById('errorMessage');

        if (!file) {
            errorMessage.textContent = '请选择要导入的Excel文件';
            return;
        }

        // 验证文件类型
        if (!file.name.endsWith('.xlsx') && !file.name.endsWith('.xls')) {
            errorMessage.textContent = '请选择Excel文件（.xlsx或.xls格式）';
            return;
        }

        // 导入数据
        studentDB.importFromExcel(file)
            .then(result => {
                errorMessage.style.color = '#28a745';
                errorMessage.textContent = `成功导入 ${result.addedCount} 条数据，共 ${result.totalCount} 条记录`;
                // 清空文件输入
                fileInput.value = '';
                // 3秒后清空成功消息
                setTimeout(() => {
                    errorMessage.textContent = '';
                    errorMessage.style.color = '#e74c3c';
                }, 3000);
            })
            .catch(error => {
                errorMessage.textContent = error.message;
            });
    }

    // 保存当前用户信息到本地存储
    setCurrentUser(student) {
        localStorage.setItem('currentUser', JSON.stringify(student));
        // 记录登录时间
        localStorage.setItem('lastLoginTime', new Date().toISOString());
    }

    // 获取当前用户信息
    static getCurrentUser() {
        const user = localStorage.getItem('currentUser');
        return user ? JSON.parse(user) : null;
    }

    // 清除当前用户信息（退出登录）
    static clearCurrentUser() {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('lastLoginTime');
    }
}

// 初始化登录管理器
window.addEventListener('DOMContentLoaded', () => {
    new LoginManager();
});