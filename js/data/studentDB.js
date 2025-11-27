// 学生数据库管理
class StudentDB {
    constructor() {
        this.students = this.loadStudents();
    }

    // 从本地存储加载学生数据
    loadStudents() {
        const data = localStorage.getItem('students');
        return data ? JSON.parse(data) : [];
    }

    // 保存学生数据到本地存储
    saveStudents() {
        localStorage.setItem('students', JSON.stringify(this.students));
    }

    // 添加单个学生
    addStudent(student) {
        // 检查是否已存在相同身份证号的学生
        const existing = this.students.find(s => s.idCard === student.idCard);
        if (existing) {
            return false;
        }
        this.students.push(student);
        this.saveStudents();
        return true;
    }

    // 批量添加学生
    addStudents(students) {
        let addedCount = 0;
        students.forEach(student => {
            if (this.addStudent(student)) {
                addedCount++;
            }
        });
        return addedCount;
    }

    // 根据身份证号和姓名查找学生
    findStudent(idCard, name) {
        return this.students.find(s => s.idCard === idCard && s.name === name);
    }

    // 导入Excel数据
    importFromExcel(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const data = new Uint8Array(e.target.result);
                    const workbook = XLSX.read(data, { type: 'array' });
                    const firstSheetName = workbook.SheetNames[0];
                    const worksheet = workbook.Sheets[firstSheetName];
                    const jsonData = XLSX.utils.sheet_to_json(worksheet);

                    // 转换数据格式
                    const students = jsonData.map(row => ({
                        idCard: row['身份证号'] || row['idCard'] || '',
                        name: row['姓名'] || row['name'] || '',
                        grade: row['年级'] || row['grade'] || '',
                        class: row['班级'] || row['class'] || ''
                    })).filter(student => student.idCard && student.name);

                    const addedCount = this.addStudents(students);
                    resolve({ success: true, addedCount, totalCount: students.length });
                } catch (error) {
                    reject({ success: false, message: 'Excel导入失败：' + error.message });
                }
            };
            reader.onerror = () => {
                reject({ success: false, message: '文件读取失败' });
            };
            reader.readAsArrayBuffer(file);
        });
    }

    // 获取所有学生
    getAllStudents() {
        return this.students;
    }

    // 删除学生
    deleteStudent(idCard) {
        const initialLength = this.students.length;
        this.students = this.students.filter(s => s.idCard !== idCard);
        if (this.students.length < initialLength) {
            this.saveStudents();
            return true;
        }
        return false;
    }
}

// 创建全局实例
const studentDB = new StudentDB();