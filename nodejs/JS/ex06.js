const url = require('url');
const fs = require('fs').promises;
const http = require('http');

http.createServer(async(req,res)=>{
    const parseURL = url.parse(req.url, true);
    console.log(parseURL);
    const pathName = parseURL.pathname;
    let file;
    if (pathName == '/join'){
        file = await fs.readFile('../html/join.html');
    } else if (pathName == '/login'){
        file = await fs.readFile('../html/login.html');
    } else{
        res.write(404);
    }
    if (file){
        res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
        res.write(file);
        res.end();
    } else {
    }

}).listen(8888, ()=>{
    console.log('Server is running!!');
});