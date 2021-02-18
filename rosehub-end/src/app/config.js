// npm install dotenv
const dotenv = require('dotenv');

// dotenv 会读取 .env文件
dotenv.config();


// 导出并且添加到全局的process.env中
module.exports = {
  APP_HOST,
  APP_PORT
} = process.env;