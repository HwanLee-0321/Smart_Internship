const express = require('express');
const path = require('path'); //경로
const app = express(); //app(서버)생성

// 바디 Parser
// 데이터를 가져오기전에 body-Paser가 준비가 되어야지만
// 제대로 파싱 가능
app.use(express.urlencoded({extended:true})); // form 태그 작성된 데이터 파싱가능

// localhost:8888/join 요청 => join.html 응답
app.get('/join', (req,res)=>{
    ///join으로 요청이 들어오면 어떻게 처리할 것인지

    //절대경로 : ex02express/views/join.html
    res.sendFile(path.join(__dirname, 'views', 'join.html'));
});

// localhost:8888/login
app.get('/login', (req,res)=>{
    ///join으로 요청이 들어오면 어떻게 처리할 것인지

    //절대경로 : ex02express/views/join.html
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});
// user/join 요청 => 회원가입처리(생략) => login.html응답
app.post('/user/join', (req, res)=>{
    // 회원가입처리
    // 사용자가 입력한 값 확인하기
    // console.log(req.query); // 요청 데이터 확인 => URL 뒤에 붙은
    // 쿼리스트링 가져옴
    console.log(req.body);

    // 응답하는 파일이 화면에 보여지기는 하지만 주소창은 바뀌지 않음
    // -> 어색함
    // res.sendFile(path.join(__dirname, 'views', 'login.html'));
    // 이 자리에서 login.html을 응답하는 게 아니라
    // /login 경로로 다시 요청
    res.redirect('/login');
});


app.listen(8888, ()=>{
    console.log('Server is running on http://localhost:8888');
});