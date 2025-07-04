const {loginUser} = require('../models/userModel');

async function login(req,res){
    const {id,pw} = req.body;
    const [result] = await loginUser(id,pw);

    console.log('로그인결과', result);

    if (result){
        req.session.user = {
            id: result.id,
            pw: result.pw
        }

        console.log('로그인', req.session.user);
        // res.send('로그인 성공!');
        res.redirect('/');
    }else{
        // res.send('로그인 실패!');
        res.redirect('/login');
    }
}

function getSession(req,res) {
    console.log('세션', req.session.user);
   res.json(req.session.user);
}

module.exports = {login, getSession};