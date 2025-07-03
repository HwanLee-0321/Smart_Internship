const express = require('express');
const pageRouter = require('./routes/pageRouter');
const memberRouter = require('./routes/memberRouter');
const app = express(); //app생성
const session = require('express-session');
app.use(express.urlencoded({extended:true})); //폼 데이터 처리
//session
app.use(session({
  secret : 'mySecretKey', //세션 암호화에 사용되는 키 (HMAC-SHA1 알고리즘 사용 암호화)
  resave : false, //요청이 들어올때마다 세션을 매번 저장하는게 아니라 변경사항이 있을 경우에만 저장
  saveUninitialized : false, //초기화 되지 않은(값이 없는) 세션은 저장하지 않음
  cookie : {
    maxAge : 1000 * 60 * 10 //10분 (ms) //브라우저를 끄지 않으면(연결을 해제하지 않으면) 10분까지만 유지
  }
}));
app.use('/', pageRouter);
app.use('/user', memberRouter);
app.listen(3000, ()=>{
    console.log('Server is running on http://localhost:3000');
});