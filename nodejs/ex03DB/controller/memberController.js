const { createMember, loginMember, updateMember, removeMember, getAllMember} = require('../models/memberModel');

async function join(req, res){
  console.log(req.body);
  const {id, pw, nick} = req.body;
  const result = await createMember(id, pw, nick); 
  console.log(result);
  if(result>0){ //1
    res.redirect('/login');
  }else{ //0
    res.redirect('/join');
  }
}

async function login(req, res){
	const { id, pw } = req.body;
	const [result] = await loginMember(id,pw);

    //세션에 값 저장 (로그인 성공 시)
    if(result){
        req.session.loginMember = {
        id : result.id,
        nick : result.nick
        }
    }

	if(result){
		res.redirect('/');
	}else{
		res.redirect('/login');
	}
}

async function update(req,res){
    const {id, pw, nick} = req.body;

    const result = await updateMember(id, pw, nick);

	if (result > 0){  // 수정성공
		res.redirect('/');
	}else{  // 수정실패
		res.redirect('/update');
	}
}

async function remove(req, res){
    // get

    const {id} = req.query;

    await removeMember(id);

    const result = await removeMember(id);

    if (result > 0){
        result.redirect('/join');
    }else{
        res.redirect('/');
    }
}

async function list(req,res){
    const result = await getAllMember();
    res.json(result);
}

function getSession(req,res){
    // session 저장된 값 응답(아이디, 닉네임)
    // 로그인할 떄 생성해준 세션 값
    res.json(req.session.loginMember);
}

module.exports = { join, login, update, remove, list, getSession};