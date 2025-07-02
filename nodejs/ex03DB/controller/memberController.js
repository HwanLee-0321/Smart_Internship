const { createMember, loginMember, updateMember, removeMember} = require('../models/memberModel');

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
	const result = await loginMember(id,pw);

	if(result.length > 0){
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

module.exports = { join, login, update, remove};