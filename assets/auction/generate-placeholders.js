const fs = require('fs');
const { createCanvas } = require('canvas');

// 创建画布并生成图片的函数
function generatePlaceholder(width, height, text, filename) {
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    // 设置背景
    ctx.fillStyle = '#1a1a1a';
    ctx.fillRect(0, 0, width, height);

    // 添加边框
    ctx.strokeStyle = '#ff0000';
    ctx.lineWidth = 2;
    ctx.strokeRect(0, 0, width, height);

    // 设置文字样式
    ctx.fillStyle = '#ff0000';
    ctx.font = '20px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // 绘制文字
    ctx.fillText(text, width/2, height/2);

    // 保存图片
    const buffer = canvas.toBuffer('image/jpeg');
    fs.writeFileSync(filename, buffer);
}

// 生成所有需要的占位图片
const images = [
    { width: 300, height: 300, text: '血月之翼', filename: 'featured.jpg' },
    { width: 200, height: 200, text: '暗影之镜', filename: 'item1.jpg' },
    { width: 200, height: 200, text: '血族权杖', filename: 'item2.jpg' },
    { width: 200, height: 200, text: '月光宝盒', filename: 'item3.jpg' }
];

// 确保目录存在
if (!fs.existsSync('./')) {
    fs.mkdirSync('./', { recursive: true });
}

// 生成所有图片
images.forEach(img => {
    generatePlaceholder(img.width, img.height, img.text, img.filename);
    console.log(`已生成: ${img.filename}`);
}); 