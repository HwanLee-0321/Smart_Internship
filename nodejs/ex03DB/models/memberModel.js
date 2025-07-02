const pool = require('../db/mysql-conn');

//회원가입             //사용자가 입력한 값
async function createMember(id, pw, nick){
    //1. Connect
    const conn = await pool.getConnection();

    try{ //무조건 실행해야 하는 블록 ~> 중간에 오류가 발생할 경우 catch블록에서 처리
        //2. sql 실행
        //[result] => execute 결과값은 배열 , 배열의 첫번째 값이 result  변수에 들어감
        const [result] = await conn.execute('insert into member(id,pw,nick) values (?,?,?)',
            [id, pw, nick]
        );
        //3. 결과처리
        console.log(result.affectedRows);
        return result.affectedRows; //1
    }finally{ //try든 catch든 마무리 후에는 무조건 마지막으로 실행하는 블록
        //4. 연결 해제
        conn.release();
    }
}

async function loginMember(id, pw){
    const conn = await pool.getConnection();

    try{
        const [result] = await conn.execute('select * from member where id=? and pw=?', [id,pw]);
        return result;
    }finally{
        conn.release();
    }
}

async function updateMember(id, newPw, newNick){
    const conn = await pool.getConnection();
    try{ // 무조건 실행되는 부분
        const [result] = await conn.execute('update member set pw=?, nick=? where id=?',[newPw,newNick,id]);
        console.log(result);
        return result.affectedRows;
    }finally{
        conn.release();
    }
}

async function removeMember(id){
    const conn = await pool.getConnection();
    try{
        const [result] = await conn.execute('delete from member where id=?', [id]);
        console.log(result);
        return result.affectedRows;
    } finally{
        conn.release();
    }
}

module.exports = { createMember, loginMember , updateMember, removeMember};