const http = require('http');
const url = require('url');
const fs = require('fs').promises;

http.createServer(async(req,res)=>{
    const file = await fs.readFile('../html/ex03FS.html');

    // html 파일을 응답
    // head-> 응답 데이터의 형식, body->응답본문 로 응답
    // 200(OK) , 400(Bad Request), 404(Not Found)
    res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
    res.write(file);
    res.end();

    const parseURL = url.parse(req.url, true);
    console.log(parseURL);
    console.log('pathname: ', parseURL.pathname);
    console.log('query: ', parseURL.query);

}).listen(8888, ()=>{
    console.log('Server is running!!');
});