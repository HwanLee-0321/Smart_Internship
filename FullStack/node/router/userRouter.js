/*

react-dom_client.js?v=e845238e:17987 Download the React DevTools for a better development experience: https://react.dev/link/react-devtools
Login.jsx:11 Uncaught TypeError: Cannot read properties of undefined (reading 'value')
    at tryLogin (Login.jsx:11:28)
    at executeDispatch (react-dom_client.js?v=e845238e:11736:11)
    at runWithFiberInDEV (react-dom_client.js?v=e845238e:1485:72)
    at processDispatchQueue (react-dom_client.js?v=e845238e:11772:37)
    at react-dom_client.js?v=e845238e:12182:11
    at batchedUpdates$1 (react-dom_client.js?v=e845238e:2628:42)
    at dispatchEventForPluginEventSystem (react-dom_client.js?v=e845238e:11877:9)
    at dispatchEvent (react-dom_client.js?v=e845238e:14792:13)
    at dispatchDiscreteEvent (react-dom_client.js?v=e845238e:14773:62)
tryLogin @ Login.jsx:11
executeDispatch @ react-dom_client.js?v=e845238e:11736
runWithFiberInDEV @ react-dom_client.js?v=e845238e:1485
processDispatchQueue @ react-dom_client.js?v=e845238e:11772
(익명) @ react-dom_client.js?v=e845238e:12182
batchedUpdates$1 @ react-dom_client.js?v=e845238e:2628
dispatchEventForPluginEventSystem @ react-dom_client.js?v=e845238e:11877
dispatchEvent @ react-dom_client.js?v=e845238e:14792
dispatchDiscreteEvent @ react-dom_client.js?v=e845238e:14773
<button>
exports.jsxDEV @ react_jsx-dev-runtime.js?v=e845238e:250
Login @ Login.jsx:24
react-stack-bottom-frame @ react-dom_client.js?v=e845238e:17424
renderWithHooks @ react-dom_client.js?v=e845238e:4206
updateFunctionComponent @ react-dom_client.js?v=e845238e:6619
beginWork @ react-dom_client.js?v=e845238e:7654
runWithFiberInDEV @ react-dom_client.js?v=e845238e:1485
performUnitOfWork @ react-dom_client.js?v=e845238e:10868
workLoopSync @ react-dom_client.js?v=e845238e:10728
renderRootSync @ react-dom_client.js?v=e845238e:10711
performWorkOnRoot @ react-dom_client.js?v=e845238e:10330
performWorkOnRootViaSchedulerTask @ react-dom_client.js?v=e845238e:11623
performWorkUntilDeadline @ react-dom_client.js?v=e845238e:36
<Login>
exports.jsxDEV @ react_jsx-dev-runtime.js?v=e845238e:250
App @ App.jsx:21
react-stack-bottom-frame @ react-dom_client.js?v=e845238e:17424
renderWithHooks @ react-dom_client.js?v=e845238e:4206
updateFunctionComponent @ react-dom_client.js?v=e845238e:6619
beginWork @ react-dom_client.js?v=e845238e:7654
runWithFiberInDEV @ react-dom_client.js?v=e845238e:1485
performUnitOfWork @ react-dom_client.js?v=e845238e:10868
workLoopSync @ react-dom_client.js?v=e845238e:10728
renderRootSync @ react-dom_client.js?v=e845238e:10711
performWorkOnRoot @ react-dom_client.js?v=e845238e:10330
performWorkOnRootViaSchedulerTask @ react-dom_client.js?v=e845238e:11623
performWorkUntilDeadline @ react-dom_client.js?v=e845238e:36
<App>
exports.jsxDEV @ react_jsx-dev-runtime.js?v=e845238e:250
(익명) @ main.jsx:10

 */

// 필요한 모듈 불러오기
const express = require('express');
const router  = express.Router();


// 데이터베이스 관련 내용 가져오기
const conn = require('../config/database')

router.post('/join', (req,res)=>{
    console.log(req.body);
    let {id,pw,nick} = req.body;
    console.log(id, pw, nick);

    // DB 쿼리문
    let sql = 'insert into member values (?,?,?)';
    // DB 연동
    conn.query(sql, [id, pw, nick], (err, result)=>{
        if(err){
            console.error('DB오류', err);
            return res.status(500).json({error : 'DB오류'});
        }
        console.log(result);
        if (result.affectedRows > 0){
            console.log('회원가입 성공')
            res.json({status : 'success'})
        } else {
            res.status(400).json({error:'회원가입 실패'})
        }
    })
})

// 로그인 처리
router.post('/login', (req,res)=>{
    console.log(req)
    let {id, pw} = req.body;

    // sql문 작성
    let sql = 'select * from where id = ? AND pw =?';

    // DB연동
    conn.query(sql, [id, pw], (err,result)=>{
        console.log(result);
        if (result.length > 0){
            console.log('succes')  
            res.json({
                nick:result[0].nick
            })
        } else {
            res.json(0);
        }
    })
})

module.exports = router;