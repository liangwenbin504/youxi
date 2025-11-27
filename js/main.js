// 主界面逻辑
class MainApp {
    constructor() {
        this.currentUser = null;
        this.currentGame = null;
        this.gameStartTime = null;
        this.init();
    }

    init() {
        // 检查用户是否已登录
        this.checkLogin();
        
        // 初始化用户信息显示
        this.displayUserInfo();
        
        // 绑定退出登录事件
        this.bindLogoutEvent();
        
        // 绑定学科和年级选择事件
        this.bindSubjectGradeEvents();
        
        // 绑定返回按钮事件
        this.bindBackEvent();
        
        // 绑定查看学习记录事件
        this.bindViewRecordsEvent();
        
        // 监听游戏完成事件
        this.listenGameComplete();
    }

    // 检查用户是否已登录
    checkLogin() {
        this.currentUser = LoginManager.getCurrentUser();
        if (!this.currentUser) {
            window.location.href = 'login.html';
        }
    }

    // 显示当前用户信息
    displayUserInfo() {
        const userInfo = document.getElementById('userInfo');
        userInfo.textContent = `欢迎，${this.currentUser.name} 同学`;
    }

    // 绑定退出登录事件
    bindLogoutEvent() {
        const logoutBtn = document.getElementById('logoutBtn');
        logoutBtn.addEventListener('click', () => {
            if (confirm('确定要退出登录吗？')) {
                LoginManager.clearCurrentUser();
                window.location.href = 'login.html';
            }
        });
    }

    // 绑定学科和年级选择事件
    bindSubjectGradeEvents() {
        const subjects = ['chinese', 'math', 'morality', 'english', 'science'];
        
        subjects.forEach(subject => {
            const gradeSelect = document.getElementById(`${subject}Grade`);
            gradeSelect.addEventListener('change', (e) => {
                const grade = e.target.value;
                this.displayGames(subject, grade);
            });
        });
    }

    // 显示游戏列表
    displayGames(subject, grade) {
        const gameList = document.getElementById(`${subject}Games`);
        gameList.innerHTML = '';
        
        if (!grade) {
            return;
        }
        
        // 获取该学科该年级的游戏列表
        const games = gameConfig[subject][grade] || [];
        
        games.forEach(game => {
            const gameItem = document.createElement('div');
            gameItem.className = 'game-item';
            gameItem.innerHTML = `
                <div class="game-item-title">${game.name}</div>
                <div class="game-item-desc">${game.description}</div>
            `;
            
            // 绑定游戏点击事件
            gameItem.addEventListener('click', () => {
                this.playGame(subject, grade, game);
            });
            
            gameList.appendChild(gameItem);
        });
    }

    // 开始游戏
    playGame(subject, grade, game) {
        this.currentGame = {
            subject: subject,
            grade: grade,
            game: game
        };
        
        this.gameStartTime = Date.now();
        
        // 显示游戏区域
        const gamePlayArea = document.getElementById('gamePlayArea');
        const subjectContainer = document.querySelector('.subject-container');
        const viewRecordsBtn = document.getElementById('viewRecordsBtn');
        
        subjectContainer.style.display = 'none';
        viewRecordsBtn.style.display = 'none';
        gamePlayArea.style.display = 'block';
        
        // 隐藏得分区域
        const scoreContainer = document.getElementById('scoreContainer');
        scoreContainer.style.display = 'none';
        
        // 加载游戏
        const gameIframe = document.getElementById('gameIframe');
        gameIframe.src = game.path;
    }

    // 监听游戏完成事件
    listenGameComplete() {
        window.addEventListener('message', (e) => {
            if (e.data.type === 'gameComplete') {
                this.handleGameComplete(e.data);
            }
        });
    }

    // 处理游戏完成
    handleGameComplete(data) {
        const score = data.score;
        const duration = Date.now() - this.gameStartTime;
        
        // 显示得分和评价
        this.displayScore(score);
        
        // 保存学习记录
        this.saveLearningRecord(score, duration);
    }

    // 显示得分和评价
    displayScore(score) {
        const scoreValue = document.getElementById('scoreValue');
        const evaluation = document.getElementById('evaluation');
        const scoreContainer = document.getElementById('scoreContainer');
        
        scoreValue.textContent = score;
        evaluation.textContent = scoringSystem.getEvaluationText(score);
        evaluation.className = `evaluation ${scoringSystem.getEvaluationClass(score)}`;
        
        scoreContainer.style.display = 'block';
    }

    // 保存学习记录
    saveLearningRecord(score, duration) {
        const record = {
            id: Date.now().toString(),
            studentId: this.currentUser.idCard,
            studentName: this.currentUser.name,
            grade: this.currentUser.grade,
            subject: this.currentGame.subject,
            gameGrade: this.currentGame.grade,
            gameId: this.currentGame.game.id,
            gameName: this.currentGame.game.name,
            score: score,
            duration: Math.round(duration / 1000), // 转换为秒
            timestamp: new Date().toISOString()
        };
        
        storageManager.saveRecord(record);
    }

    // 绑定返回按钮事件
    bindBackEvent() {
        const backBtn = document.getElementById('backBtn');
        backBtn.addEventListener('click', () => {
            this.returnToSubjectSelection();
        });
    }

    // 返回学科选择界面
    returnToSubjectSelection() {
        const gamePlayArea = document.getElementById('gamePlayArea');
        const subjectContainer = document.querySelector('.subject-container');
        const viewRecordsBtn = document.getElementById('viewRecordsBtn');
        
        gamePlayArea.style.display = 'none';
        subjectContainer.style.display = 'grid';
        viewRecordsBtn.style.display = 'block';
        
        // 重置游戏iframe
        const gameIframe = document.getElementById('gameIframe');
        gameIframe.src = '';
        
        this.currentGame = null;
        this.gameStartTime = null;
    }

    // 绑定查看学习记录事件
    bindViewRecordsEvent() {
        const viewRecordsBtn = document.getElementById('viewRecordsBtn');
        viewRecordsBtn.addEventListener('click', () => {
            this.viewLearningRecords();
        });
    }

    // 查看学习记录
    viewLearningRecords() {
        // 这里可以跳转到学习记录页面，或者在当前页面显示
        // 暂时使用alert显示统计信息
        const records = storageManager.getRecordsByStudentId(this.currentUser.idCard);
        const stats = storageManager.getStatistics(records);
        
        let statsText = `学习记录统计\n\n`;
        statsText += `总游戏次数：${stats.totalGames}\n`;
        statsText += `总得分：${stats.totalScore.toFixed(1)}\n`;
        statsText += `平均得分：${stats.averageScore.toFixed(1)}\n`;
        statsText += `总学习时长：${Math.round(stats.totalDuration / 60)} 分钟\n\n`;
        
        statsText += `各学科表现：\n`;
        Object.keys(stats.subjectStats).forEach(subject => {
            const subjectStat = stats.subjectStats[subject];
            statsText += `${this.getSubjectName(subject)}：${subjectStat.averageScore.toFixed(1)} 分（${subjectStat.count} 次）\n`;
        });
        
        alert(statsText);
    }

    // 获取学科中文名称
    getSubjectName(subject) {
        const subjectNames = {
            chinese: '语文',
            math: '数学',
            morality: '品德',
            english: '英语',
            science: '科学'
        };
        return subjectNames[subject] || subject;
    }
}

// 页面加载完成后初始化应用
window.addEventListener('DOMContentLoaded', () => {
    new MainApp();
});