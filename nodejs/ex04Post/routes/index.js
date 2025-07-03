const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/login', (res, req)=>{
    res.sendFile(path.join(__dirname,'../views/login.html'));
})

module.exports = router;