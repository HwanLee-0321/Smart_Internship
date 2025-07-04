// postController.js

const {create}  = require('../models/postModel');

async function createPost(req,res){
    const post = req.body;  // json(title, writer, content)
    const filename = req.file.filename;  // 업로드한 파일 이름만 가져옴

    // 파일이름까지 post json 객체에 추가
    post.img = filename;

    await create(post);
}

module.exports = {createPost};