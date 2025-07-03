const pool = require('../db/mysql-conn');

async function loginUser(id, pw){
    const conn = await pool.getConnection();

    try {
        const [result] = await conn.execute('select * from member where id=? and pw=?', [id, pw]);
        // commit 중요중요
        // auto commit
        return result;
    } finally{
        conn.release();
    }
}

module.exports = {loginUser};