const express = require('express');
const app = express();
const host = "http://localhost:8888";

app.get('/join', (req, res)=>{
    // join으로 요청이 들어오면 어떻게 처리할 것인지
    res.sendFile();
});

express(); // app(서버)생성
app.listen(8888, ()=>{
    console.log("Server is running on" + host);
})