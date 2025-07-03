const {loginUser} = require('../models/userModel');

async function login(req,res){
    const {id,pw} = req.body;
    const result = await loginUser(id,pw);

    if (result){
        req.session.user = {
            id: result.id,
            pw: result.pw
        }

        res.send('로그인 성공!');
    }else{
        res.send('로그인 실패!');
    }
}

module.exports = {login};