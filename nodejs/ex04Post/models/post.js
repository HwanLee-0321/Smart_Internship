const {DataTypes, TEXT} = require('sequelize');
const sequelize = require('../db/sequelize');

// post 테이블(게시물 저장) 정의
// 게시물번호(식별자): 1부터 1씩 증가
// 게시물제목(문자열, NN)
// 게시물내용(문자열, 문자열을 많이 많이해야함)
// 작성자(문자열, NN)
// 이미지파일이름(문자열) -> 이미지파일(서버공간)
// 작성일자(시간데이터)
const Post = sequelize.define('Post', {
    id: {  // 게시물 아이디
        type: DataTypes.INTEGER,
        autoIncreament: true,
        primaryKey: true
    },
    title:{  // 게시물제목
        type:DataTypes.STRING,
        allowNUull: false,
    },
    content:{  // 게시물내용
        type:DataTypes.TEXT,
        allowNUull:false,
    },
    writer:{  // 작성자
        type: DataTypes.STRING,
        allowNUull: false
    },
    img:{  // 이미지파일이름.확장자
        type:DataTypes.STRING,
        allowNUull:true
    },
    createdAt:{  // 작성일자
        type:DataTypes.DATE,
        defaultValue:DataTypes.NOW
    }
}, {
    talbeName: 'post',
    timestamps: false
});

module.exports = Post;