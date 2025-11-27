// 评分与评价系统
class ScoringSystem {
    constructor() {
        this.evaluationLevels = {
            excellent: { minScore: 90, text: '优秀', className: 'excellent' },
            good: { minScore: 80, text: '良好', className: 'good' },
            pass: { minScore: 60, text: '及格', className: 'pass' },
            needsImprovement: { minScore: 0, text: '需努力', className: 'needs-improvement' }
        };
    }

    // 计算得分（精确到小数点后一位）
    calculateScore(correctAnswers, totalQuestions) {
        if (totalQuestions === 0) return 0;
        const score = (correctAnswers / totalQuestions) * 100;
        return parseFloat(score.toFixed(1));
    }

    // 根据得分获取评价
    getEvaluation(score) {
        if (score >= this.evaluationLevels.excellent.minScore) {
            return this.evaluationLevels.excellent;
        } else if (score >= this.evaluationLevels.good.minScore) {
            return this.evaluationLevels.good;
        } else if (score >= this.evaluationLevels.pass.minScore) {
            return this.evaluationLevels.pass;
        } else {
            return this.evaluationLevels.needsImprovement;
        }
    }

    // 生成评价文本
    getEvaluationText(score) {
        const evaluation = this.getEvaluation(score);
        return evaluation.text;
    }

    // 生成评价CSS类名
    getEvaluationClass(score) {
        const evaluation = this.getEvaluation(score);
        return evaluation.className;
    }

    // 计算学科均衡度
    calculateBalance(subjectStats) {
        if (Object.keys(subjectStats).length === 0) return 100;
        
        const scores = Object.values(subjectStats).map(stat => stat.averageScore);
        const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
        
        // 防止除以零
        if (average === 0) return 100;
        
        // 计算标准差
        const variance = scores.reduce((sum, score) => sum + Math.pow(score - average, 2), 0) / scores.length;
        const stdDev = Math.sqrt(variance);
        
        // 均衡度 = 100 - (标准差 / 平均分 * 100)，确保在0-100之间
        const balance = Math.max(0, Math.min(100, 100 - (stdDev / average * 100)));
        return parseFloat(balance.toFixed(1));
    }

    // 计算学习频率得分
    calculateFrequencyScore(records, days = 30) {
        if (records.length === 0) return 0;
        
        // 统计活跃天数
        const activeDays = new Set();
        records.forEach(record => {
            const date = new Date(record.timestamp).toDateString();
            activeDays.add(date);
        });
        
        // 频率得分 = (活跃天数 / 总天数) * 100
        const frequencyScore = (activeDays.size / days) * 100;
        return parseFloat(Math.min(100, frequencyScore).toFixed(1));
    }

    // 计算综合评分
    calculateCompositeScore(averageScore, balance, frequencyScore) {
        // 权重分配：平均分60%，均衡度20%，学习频率20%
        const compositeScore = (averageScore * 0.6) + (balance * 0.2) + (frequencyScore * 0.2);
        return parseFloat(compositeScore.toFixed(1));
    }

    // 获取综合评价
    getCompositeEvaluation(score) {
        return this.getEvaluation(score);
    }
}

// 创建全局实例
const scoringSystem = new ScoringSystem();