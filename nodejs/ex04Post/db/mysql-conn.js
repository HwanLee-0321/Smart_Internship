const mysql = require('mysql2/promise');

//DB 연결정보
const pool = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : '1234',
    database : 'node'
});

module.exports = pool;