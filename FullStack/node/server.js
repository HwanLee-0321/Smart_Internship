require('dotenv').config();
const express = require('express');
const app = express();const cors = require('cors');
const userRouter = require('./router/userRouter');
// 폼형태에서 post 방식으로 제출시 필요한 미들웨어
app.use(express.urlencoded({extended:true}));
// post 요청에서 json형식으로 데이터 파싱
app.use(express.json());
// 다른 도메인 또는 포트에서 오는 요청을 허용하는 미들웨어
app.use(cors());
// user경로로 들어오는 요청을 userRouter 라투어가 처리하도록 연결
app.use('/user', userRouter);
// 포트번호설정
app.listen(8000);