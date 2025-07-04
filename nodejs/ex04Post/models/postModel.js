const Sequelize = require('../db/sequelize');
const sequelize  = require('../db/sequelize');
const Post = require('./post');

async function create(newPost){
    try{
        // 연결확인
        await Sequelize.authenticate();

        // 모델로 정의된 테이블 구조(post)를 실제 DB와 동기화
        // create -> force:true => create()실행될 때마다 테이블을 새로벡 생성(drop->create) => 매번 데이터가 다 삭제
        // alter  -> alter.true => 기존 테이블은 유지하고 모델과 맞기 않는 부분만 자동 ALTER로 수정
        sequelize.sync({alter:true});

        // 게시물 추가
        Post.create(newPost);

    }finally{

    }
}