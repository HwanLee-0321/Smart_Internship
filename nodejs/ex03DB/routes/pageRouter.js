const express = require('express');
const router = express.Router();
const path = require('path');

//주소창에 주소를 입력해서 요청하는 것은 -> get 요청
//단순히 페이지만 보여지는 것 -> get
//join.html 응답 localhost:8888/join
router.get('/join', (req,res)=>{
     //__dirname : 현재 파일(pageRouter)이 있는 절대 경로 (routes) => routes 경로/
     res.sendFile(path.join(__dirname, '..', 'views', 'join.html'));
});

//login.html 응답 localhost:8888/login
router.get('/login', (req,res)=>{
     // 1. 템플릿엔진
     // 2. sendFile(index) -> 클라이언트에서 index파일을 비동기방식으로
     // 추가적으로 파일요청

     res.sendFile(path.join(__dirname, '..', 'views', 'login.html'));
});

// localhost:3000/
router.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

router.get('/update', (req,res)=>{
    res.sendFile(path.join(__dirname, '..', 'views', 'update.html'));
});

module.exports = router;