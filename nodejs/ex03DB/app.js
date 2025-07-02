const express = require('express');
const path = require('path'); //경로 다루는 모듈
const pageRouter = require('./routes/pageRouter');
const memberRouter = require('./routes/memberRouter');
const { createMember, loginMember} = require('./models/memberModel');

const app = express(); //app생성

//body-parser
app.use(express.urlencoded({extended:true})); //폼 데이터 처리

//localhost:8888/~ => pageRouter
app.use('/', pageRouter);
app.use('/user', memberRouter);

app.listen(3000, ()=>{
  console.log('Server is running on http://localhost:3000');
});