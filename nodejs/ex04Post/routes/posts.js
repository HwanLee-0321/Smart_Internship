const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const {createPost} = require('../controller/postController');

const storage = multer.diskStorage({ // 서버 디스크 저장
    destination: (req, file, cb) => {
        cb(null, 'upload/');
    },
    filename: (req, file, cb) =>{
        cb(null, Date.now()+path.extname(file.originalname));
    }
});
const uplaod = multer({storage});
// single: 단일 팡리
// array(fileName, maxCount => 최대개수)
router.post('/', uplaod.single('img'), createPost);;
module.exports = router;