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
    id: {   // 게시물 아이디
        type: DataTypes.INTEGER,
        autoIncrement: true, // 오타 수정: autoIncreament -> autoIncrement
        primaryKey: true
    },
    title:{   // 게시물제목
        type:DataTypes.STRING,
        allowNull: false, // 오타 수정: allowNUull -> allowNull
    },
    content:{   // 게시물내용
        type:DataTypes.TEXT,
        allowNull:false, // 오타 수정: allowNUull -> allowNull
    },
    writer:{   // 작성자
        type: DataTypes.STRING,
        allowNull: false // 오타 수정: allowNull -> allowNull
    },
    img:{   // 이미지파일이름.확장자
        type:DataTypes.STRING,
        allowNull:true
    },
    createdAt:{   // 작성일자
        type:DataTypes.DATE,
        defaultValue:DataTypes.NOW
    }
}, {
    tableName: 'post', // 오타 수정: tableName -> tableName
    timestamps: false
});

module.exports = Post;