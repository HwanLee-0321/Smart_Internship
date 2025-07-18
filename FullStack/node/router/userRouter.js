// 필요한 모듈 불러오기
const express = require('express');
const router  = express.Router();


// 데이터베이스 관련 내용 가져오기
const conn = require('../config/database')

router.post('/join', (req,res)=>{
    console.log(req.body);
    let {id,pw,nick} = req.body;
    console.log(id, pw, nick);

    // DB 쿼리문
    let sql = 'insert into member values (?,?,?)';
    // DB 연동
    conn.query(sql, [id, pw, nick], (err, result)=>{
        if(err){
            console.error('DB오류', err);
            return res.status(500).json({error : 'DB오류'});
        }
        console.log(result);
        if (result.affectedRows > 0){
            console.log('회원가입 성공')
            res.json({status : 'success'})
        } else {
            res.status(400).json({error:'회원가입 실패'})
        }
    })
})

module.exports = router;