// 游戏配置数据
const gameConfig = {
    // 语文学科游戏配置
    chinese: {
        1: [
            { id: 'chinese1-1', name: '拼音配对', description: '将汉字与对应的拼音进行配对', path: 'games/chinese/grade1/game1.html' },
            { id: 'chinese1-2', name: '汉字填空', description: '根据图片提示填写正确的汉字', path: 'games/chinese/grade1/game2.html' },
            { id: 'chinese1-3', name: '词语连线', description: '将相关的词语进行连线匹配', path: 'games/chinese/grade1/game3.html' }
        ],
        2: [
            { id: 'chinese2-1', name: '词语接龙', description: '根据前一个词语的最后一个字接新词语', path: 'games/chinese/grade2/game1.html' },
            { id: 'chinese2-2', name: '句子排序', description: '将打乱的句子重新排列成通顺的话', path: 'games/chinese/grade2/game2.html' },
            { id: 'chinese2-3', name: '看图说话', description: '根据图片内容编写简短的故事', path: 'games/chinese/grade2/game3.html' }
        ],
        3: [
            { id: 'chinese3-1', name: '成语填空', description: '填写成语中缺失的字', path: 'games/chinese/grade3/game1.html' },
            { id: 'chinese3-2', name: '诗词默写', description: '根据提示默写古诗词', path: 'games/chinese/grade3/game2.html' },
            { id: 'chinese3-3', name: '段落理解', description: '阅读短文并回答问题', path: 'games/chinese/grade3/game3.html' }
        ],
        4: [
            { id: 'chinese4-1', name: '近义词辨析', description: '区分意思相近的词语', path: 'games/chinese/grade4/game1.html' },
            { id: 'chinese4-2', name: '病句修改', description: '找出并修改句子中的错误', path: 'games/chinese/grade4/game2.html' },
            { id: 'chinese4-3', name: '作文构思', description: '根据题目进行作文构思和大纲编写', path: 'games/chinese/grade4/game3.html' }
        ],
        5: [
            { id: 'chinese5-1', name: '文言文阅读', description: '阅读简单的文言文并理解其意思', path: 'games/chinese/grade5/game1.html' },
            { id: 'chinese5-2', name: '修辞手法识别', description: '识别句子中使用的修辞手法', path: 'games/chinese/grade5/game2.html' },
            { id: 'chinese5-3', name: '文学常识竞赛', description: '回答关于文学常识的问题', path: 'games/chinese/grade5/game3.html' }
        ],
        6: [
            { id: 'chinese6-1', name: '阅读理解', description: '阅读复杂文章并回答问题', path: 'games/chinese/grade6/game1.html' },
            { id: 'chinese6-2', name: '写作技巧', description: '学习并应用各种写作技巧', path: 'games/chinese/grade6/game2.html' },
            { id: 'chinese6-3', name: '名著知识竞赛', description: '回答关于名著的知识问题', path: 'games/chinese/grade6/game3.html' }
        ]
    },
    
    // 数学学科游戏配置
    math: {
        1: [
            { id: 'math1-1', name: '数字拼图', description: '将数字按顺序排列', path: 'games/math/grade1/game1.html' },
            { id: 'math1-2', name: '算术闯关', description: '完成简单的加减法运算', path: 'games/math/grade1/game2.html' },
            { id: 'math1-3', name: '数的大小比较', description: '比较数字的大小', path: 'games/math/grade1/game3.html' }
        ],
        2: [
            { id: 'math2-1', name: '乘法口诀', description: '练习乘法口诀表', path: 'games/math/grade2/game1.html' },
            { id: 'math2-2', name: '图形识别', description: '识别各种几何图形', path: 'games/math/grade2/game2.html' },
            { id: 'math2-3', name: '简单应用题', description: '解决简单的数学应用题', path: 'games/math/grade2/game3.html' }
        ],
        3: [
            { id: 'math3-1', name: '除法挑战', description: '练习除法运算', path: 'games/math/grade3/game1.html' },
            { id: 'math3-2', name: '周长计算', description: '计算各种图形的周长', path: 'games/math/grade3/game2.html' },
            { id: 'math3-3', name: '分数认识', description: '认识和比较分数', path: 'games/math/grade3/game3.html' }
        ],
        4: [
            { id: 'math4-1', name: '面积计算', description: '计算各种图形的面积', path: 'games/math/grade4/game1.html' },
            { id: 'math4-2', name: '小数运算', description: '练习小数的加减乘除', path: 'games/math/grade4/game2.html' },
            { id: 'math4-3', name: '统计图解读', description: '解读各种统计图', path: 'games/math/grade4/game3.html' }
        ],
        5: [
            { id: 'math5-1', name: '分数运算', description: '练习分数的四则运算', path: 'games/math/grade5/game1.html' },
            { id: 'math5-2', name: '体积计算', description: '计算各种立体图形的体积', path: 'games/math/grade5/game2.html' },
            { id: 'math5-3', name: '方程求解', description: '解简单的方程', path: 'games/math/grade5/game3.html' }
        ],
        6: [
            { id: 'math6-1', name: '比例应用', description: '应用比例解决实际问题', path: 'games/math/grade6/game1.html' },
            { id: 'math6-2', name: '百分数计算', description: '练习百分数的计算和应用', path: 'games/math/grade6/game2.html' },
            { id: 'math6-3', name: '几何证明', description: '进行简单的几何证明', path: 'games/math/grade6/game3.html' }
        ]
    },
    
    // 品德学科游戏配置
    morality: {
        1: [
            { id: 'morality1-1', name: '礼貌用语', description: '学习和使用礼貌用语', path: 'games/morality/grade1/game1.html' },
            { id: 'morality1-2', name: '行为判断', description: '判断哪些行为是正确的', path: 'games/morality/grade1/game2.html' },
            { id: 'morality1-3', name: '我爱我家', description: '了解家庭的重要性', path: 'games/morality/grade1/game3.html' }
        ],
        2: [
            { id: 'morality2-1', name: '遵守规则', description: '学习和遵守各种规则', path: 'games/morality/grade2/game1.html' },
            { id: 'morality2-2', name: '尊敬师长', description: '学习尊敬老师和长辈', path: 'games/morality/grade2/game2.html' },
            { id: 'morality2-3', name: '爱护环境', description: '学习保护环境的重要性', path: 'games/morality/grade2/game3.html' }
        ],
        3: [
            { id: 'morality3-1', name: '团结友爱', description: '学习与同学友好相处', path: 'games/morality/grade3/game1.html' },
            { id: 'morality3-2', name: '诚实守信', description: '学习诚实守信的重要性', path: 'games/morality/grade3/game2.html' },
            { id: 'morality3-3', name: '热爱集体', description: '培养集体荣誉感', path: 'games/morality/grade3/game3.html' }
        ],
        4: [
            { id: 'morality4-1', name: '孝敬父母', description: '学习孝敬父母的方式', path: 'games/morality/grade4/game1.html' },
            { id: 'morality4-2', name: '尊重他人', description: '学习尊重他人的权利和尊严', path: 'games/morality/grade4/game2.html' },
            { id: 'morality4-3', name: '社会公德', description: '学习社会公德规范', path: 'games/morality/grade4/game3.html' }
        ],
        5: [
            { id: 'morality5-1', name: '责任担当', description: '培养责任感和担当精神', path: 'games/morality/grade5/game1.html' },
            { id: 'morality5-2', name: '公平正义', description: '理解公平正义的含义', path: 'games/morality/grade5/game2.html' },
            { id: 'morality5-3', name: '爱国情怀', description: '培养爱国情感', path: 'games/morality/grade5/game3.html' }
        ],
        6: [
            { id: 'morality6-1', name: '人生价值', description: '思考人生的价值和意义', path: 'games/morality/grade6/game1.html' },
            { id: 'morality6-2', name: '法治意识', description: '学习法律知识和法治意识', path: 'games/morality/grade6/game2.html' },
            { id: 'morality6-3', name: '全球视野', description: '培养全球视野和国际意识', path: 'games/morality/grade6/game3.html' }
        ]
    },
    
    // 英语学科游戏配置
    english: {
        1: [
            { id: 'english1-1', name: '字母配对', description: '匹配大小写字母', path: 'games/english/grade1/game1.html' },
            { id: 'english1-2', name: '单词图片', description: '将单词与对应的图片匹配', path: 'games/english/grade1/game2.html' },
            { id: 'english1-3', name: '简单对话', description: '学习简单的英语对话', path: 'games/english/grade1/game3.html' }
        ],
        2: [
            { id: 'english2-1', name: '单词拼写', description: '根据图片拼写单词', path: 'games/english/grade2/game1.html' },
            { id: 'english2-2', name: '日常用语', description: '学习日常英语用语', path: 'games/english/grade2/game2.html' },
            { id: 'english2-3', name: '简单阅读', description: '阅读简单的英语短文', path: 'games/english/grade2/game3.html' }
        ],
        3: [
            { id: 'english3-1', name: '语法练习', description: '练习基本的英语语法', path: 'games/english/grade3/game1.html' },
            { id: 'english3-2', name: '单词记忆', description: '记忆和复习英语单词', path: 'games/english/grade3/game2.html' },
            { id: 'english3-3', name: '对话练习', description: '练习英语对话', path: 'games/english/grade3/game3.html' }
        ],
        4: [
            { id: 'english4-1', name: '阅读理解', description: '阅读英语文章并回答问题', path: 'games/english/grade4/game1.html' },
            { id: 'english4-2', name: '写作练习', description: '练习英语写作', path: 'games/english/grade4/game2.html' },
            { id: 'english4-3', name: '听力练习', description: '进行英语听力练习', path: 'games/english/grade4/game3.html' }
        ],
        5: [
            { id: 'english5-1', name: '语法进阶', description: '学习更复杂的英语语法', path: 'games/english/grade5/game1.html' },
            { id: 'english5-2', name: '英语演讲', description: '练习英语演讲', path: 'games/english/grade5/game2.html' },
            { id: 'english5-3', name: '阅读理解进阶', description: '阅读较复杂的英语文章', path: 'games/english/grade5/game3.html' }
        ],
        6: [
            { id: 'english6-1', name: '英语写作', description: '进行各种类型的英语写作', path: 'games/english/grade6/game1.html' },
            { id: 'english6-2', name: '英语辩论', description: '练习英语辩论', path: 'games/english/grade6/game2.html' },
            { id: 'english6-3', name: '英语文化', description: '了解英语国家的文化', path: 'games/english/grade6/game3.html' }
        ]
    },
    
    // 科学学科游戏配置
    science: {
        1: [
            { id: 'science1-1', name: '动物世界', description: '认识各种动物', path: 'games/science/grade1/game1.html' },
            { id: 'science1-2', name: '植物认知', description: '认识各种植物', path: 'games/science/grade1/game2.html' },
            { id: 'science1-3', name: '天气现象', description: '了解各种天气现象', path: 'games/science/grade1/game3.html' }
        ],
        2: [
            { id: 'science2-1', name: '简单实验', description: '进行简单的科学实验', path: 'games/science/grade2/game1.html' },
            { id: 'science2-2', name: '人体结构', description: '了解人体的基本结构', path: 'games/science/grade2/game2.html' },
            { id: 'science2-3', name: '物质状态', description: '认识物质的三种状态', path: 'games/science/grade2/game3.html' }
        ],
        3: [
            { id: 'science3-1', name: '力与运动', description: '了解力与运动的关系', path: 'games/science/grade3/game1.html' },
            { id: 'science3-2', name: '简单电路', description: '学习简单的电路知识', path: 'games/science/grade3/game2.html' },
            { id: 'science3-3', name: '生态系统', description: '了解生态系统的组成', path: 'games/science/grade3/game3.html' }
        ],
        4: [
            { id: 'science4-1', name: '地球科学', description: '了解地球的结构和运动', path: 'games/science/grade4/game1.html' },
            { id: 'science4-2', name: '化学变化', description: '认识化学变化', path: 'games/science/grade4/game2.html' },
            { id: 'science4-3', name: '声音传播', description: '了解声音的传播原理', path: 'games/science/grade4/game3.html' }
        ],
        5: [
            { id: 'science5-1', name: '光的传播', description: '学习光的传播原理', path: 'games/science/grade5/game1.html' },
            { id: 'science5-2', name: '生物进化', description: '了解生物进化的基本原理', path: 'games/science/grade5/game2.html' },
            { id: 'science5-3', name: '简单机械', description: '学习简单机械的原理', path: 'games/science/grade5/game3.html' }
        ],
        6: [
            { id: 'science6-1', name: '能量转换', description: '了解各种能量转换', path: 'games/science/grade6/game1.html' },
            { id: 'science6-2', name: '环境保护', description: '学习环境保护的重要性', path: 'games/science/grade6/game2.html' },
            { id: 'science6-3', name: '科学探究', description: '学习科学探究的方法', path: 'games/science/grade6/game3.html' }
        ]
    }
};