const sequelize  = require('../db/sequelize');
const Post = require('./post');

async function create(newPost){
    try{
        // 연결확인
        await sequelize.authenticate();

        // 모델로 정의된 테이블 구조(post)를 실제 DB와 동기화
        // create -> force:true => create()실행될 때마다 테이블을 새로벡 생성(drop->create) => 매번 데이터가 다 삭제
        // alter  -> alter.true => 기존 테이블은 유지하고 모델과 맞기 않는 부분만 자동 ALTER로 수정
        sequelize.sync({alter:true});

        // 게시물 추가
        const result = await Post.create(newPost);
        console.log(result);

        return result;

    } catch(err){
        console.error('create 실패:', err);
    }
}

async function getPostAll(){
    try{
        await sequelize.authenticate();
        sequelize.sync({alter:true});
        const result = await Post.findAll();
        return result;
    } catch(err){
        console.err('게시물 전체 불러오기 실패', err);
    }
}

async function getPostOne(id){
    try{
        await sequelize.authenticate();

        await sequelize.sync({alter:true});

        const result = await Post.findByPk(id);

        return result;
    } catch(err){
        console.err('게시물 하나 불러오기 실패', err);
    }
}

module.exports = {create, getPostAll, getPostOne};