// 필요한 모듈 불러오기
const express = require('express');
const router  = express.Router();


// 데이터베이스 관련 내용 가져오기
const conn = require('../config/database')