import React from 'react';
import {useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Join = () => {
  // 화면에 떠있는 DOM 요소들 접근하기
  const idRef   = useRef();
  const pwRef   = useRef();
  const nickRef = useRef();
  const nav     = useNavigate();

  const tryJoin=()=>{
    let id = idRef.current.value
    let pw = pwRef.current.value
    let nick = nickRef.current.value
    console.log(id,pw,nick)

    axios.
          post('http://localhost:8000/user/join', {
            id: id,
            pw: pw,
            nick: nick
          })
          .then((res)=>{
            console.log(res.data)
            if(res.data.result === "success"){
                nav('/')
            } else {
                alert("회원가입 실패")
                // input 태그 값 초기화
                reset()
            }
          })
  }

  const reset=()=>{
    idRef.current.value = ""
    pwRef.current.value = ""
    nickRef.current.value = ""
  }

  return (
    <div>
      <h1>회원 가입 페이지입니다.</h1>
      ID: <input type="text" ref={idRef}/>   <br />
      PW: <input type="password" ref={pwRef}/>   <br />
      NICK: <input type="text" ref={nickRef}/> <br />
      <button onClick={tryJoin}>JOIN</button>
      <button onClick={reset}>RESET</button>
    </div>
  )
}

export default Join