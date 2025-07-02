const express = require('express');
const router = express.Router();
const { join, login } = require('../controller/memberController');

router.post('/join', join);

//로그인 : 사용자가 입력한 아이디, 비밀번호가 member DB에 있는지 확인하고 있으면 (성공) 없으면 (실패)
router.post('/login', login);

module.exports = router;