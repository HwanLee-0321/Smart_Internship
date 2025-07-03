// index.js
const express = require('express');
const router = express.Router();
const path = require('path');

// req와 res의 순서를 올바르게 수정합니다.
router.get('/login', (req, res)=>{
    // 이제 res는 정상적으로 응답(response) 객체를 가리키므로 sendFile 메소드를 사용할 수 있습니다.
    res.sendFile(path.join(__dirname,'../views/login.html'));
})

module.exports = router;