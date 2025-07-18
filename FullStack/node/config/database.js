require('dotenv').config();
// mysql 연결하는 모듈 가져오기
const mysql = require('mysql2')

// 데이터베이스 연결
const conn = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "1234",
    port: process.env.DB_PORT || 3306,
    database: process.env.DB_DATABASE || 'node'
})

// 외부에서 사용할 수 있도록 내보내기
module.exports = conn;
