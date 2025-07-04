const express = require('express');
const indexRoutes = require('./routes/index');
const userRoutes = require('./routes/users');
const postRoutes = require('./routes/posts');
const session = require('express-session');
const app = express();

// middle-ware(미들웨어): 요청~응답 사이에 존재하는 기술들
app.use(express.urlencoded({extended:true}));

// upload 설정
app.use('/upload', express.static('upload'));

app.use(session({
  secret: 'myScretKey',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 30
  }
}));

app.use('/', indexRoutes);
app.use('/users', userRoutes);
app.use('/posts', postRoutes);

app.listen(3000, ()=>{
  console.log('Server is running on http://localhost:3000');
})