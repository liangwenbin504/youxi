// 本地存储管理
class StorageManager {
    constructor() {
        this.recordsKey = 'learningRecords';
    }

    // 保存学习记录
    saveRecord(record) {
        const records = this.getRecords();
        records.push(record);
        localStorage.setItem(this.recordsKey, JSON.stringify(records));
    }

    // 获取所有学习记录
    getRecords() {
        const data = localStorage.getItem(this.recordsKey);
        return data ? JSON.parse(data) : [];
    }

    // 根据学生ID获取学习记录
    getRecordsByStudentId(studentId) {
        const records = this.getRecords();
        return records.filter(record => record.studentId === studentId);
    }

    // 根据日期范围获取学习记录
    getRecordsByDateRange(studentId, startDate, endDate) {
        const records = this.getRecordsByStudentId(studentId);
        return records.filter(record => {
            const recordDate = new Date(record.timestamp);
            return recordDate >= startDate && recordDate <= endDate;
        });
    }

    // 获取本周的学习记录
    getWeeklyRecords(studentId) {
        const now = new Date();
        const startOfWeek = new Date(now);
        startOfWeek.setDate(now.getDate() - now.getDay());
        startOfWeek.setHours(0, 0, 0, 0);
        
        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 6);
        endOfWeek.setHours(23, 59, 59, 999);
        
        return this.getRecordsByDateRange(studentId, startOfWeek, endOfWeek);
    }

    // 获取本月的学习记录
    getMonthlyRecords(studentId) {
        const now = new Date();
        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999);
        
        return this.getRecordsByDateRange(studentId, startOfMonth, endOfMonth);
    }

    // 获取本学期的学习记录（假设学期从9月1日到次年1月31日，或3月1日到7月31日）
    getSemesterRecords(studentId) {
        const now = new Date();
        const currentMonth = now.getMonth() + 1;
        let startOfSemester, endOfSemester;
        
        if (currentMonth >= 9 || currentMonth <= 1) {
            // 秋季学期：9月1日到次年1月31日
            startOfSemester = new Date(now.getFullYear() - (currentMonth <= 1 ? 1 : 0), 8, 1);
            endOfSemester = new Date(now.getFullYear() - (currentMonth <= 1 ? 0 : 1), 0, 31, 23, 59, 59, 999);
        } else {
            // 春季学期：3月1日到7月31日
            startOfSemester = new Date(now.getFullYear(), 2, 1);
            endOfSemester = new Date(now.getFullYear(), 6, 31, 23, 59, 59, 999);
        }
        
        return this.getRecordsByDateRange(studentId, startOfSemester, endOfSemester);
    }

    // 统计学习记录
    getStatistics(records) {
        if (records.length === 0) {
            return {
                totalGames: 0,
                totalScore: 0,
                averageScore: 0,
                totalDuration: 0,
                subjectStats: {}
            };
        }

        // 计算总分和总时长
        const totalScore = records.reduce((sum, record) => sum + record.score, 0);
        const totalDuration = records.reduce((sum, record) => sum + (record.duration || 0), 0);
        
        // 按学科统计
        const subjectStats = {};
        records.forEach(record => {
            if (!subjectStats[record.subject]) {
                subjectStats[record.subject] = {
                    count: 0,
                    totalScore: 0,
                    averageScore: 0
                };
            }
            subjectStats[record.subject].count++;
            subjectStats[record.subject].totalScore += record.score;
        });
        
        // 计算各学科平均分
        Object.keys(subjectStats).forEach(subject => {
            subjectStats[subject].averageScore = subjectStats[subject].totalScore / subjectStats[subject].count;
        });
        
        return {
            totalGames: records.length,
            totalScore: totalScore,
            averageScore: totalScore / records.length,
            totalDuration: totalDuration,
            subjectStats: subjectStats
        };
    }

    // 清除所有学习记录
    clearRecords() {
        localStorage.removeItem(this.recordsKey);
    }

    // 根据记录ID删除学习记录
    deleteRecord(recordId) {
        const records = this.getRecords();
        const newRecords = records.filter(record => record.id !== recordId);
        localStorage.setItem(this.recordsKey, JSON.stringify(newRecords));
    }
}

// 创建全局实例
const storageManager = new StorageManager();