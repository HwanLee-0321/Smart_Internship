const express = require('express');
const {login, getSession} = require('../controller/userController');
const router = express.Router();

router.post('/login', login);

router.get('/', getSession);

module.exports = router;