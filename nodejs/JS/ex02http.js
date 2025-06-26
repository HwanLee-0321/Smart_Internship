const http = require('http'); // node.js core API 모듈중 하나인 http 모듈 사용 하겠다!

// http 모듈 사용해서 서버 열기
// 새 http 서버 만듦
http.createServer((req,res)=>{

    // 요청 처리..

}).listen(8888, ()=>{
    
    // 서버가 정상적으로 실행되면 실행하고 싶은 로직
    console.log('good');
});
// 8888: 포트번호