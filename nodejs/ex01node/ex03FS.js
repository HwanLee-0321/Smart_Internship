const http = require('http');
// 파일관련 작업 비동기 처리 
// 파일시스템 fs 모듈

// async, await 사용
const fs = require('fs').promises;

http.createServer(async (req,res)=>{

    // async/await 사용법
    // await: 불러와야 하는 파일 앞에 붙이기
    // html 불러오기
    const file = await fs.readFile('../html/ex03FS.html');

    // html 파일을 응답
    // head-> 응답 데이터의 형식, body->응답본문 로 응답
    // 200(OK) , 400(Bad Request), 404(Not Found)
    res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
    res.write(file);
    res.end();

}).listen(8888, ()=>{
    
    console.log('good');

});