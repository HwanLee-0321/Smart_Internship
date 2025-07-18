import axios from 'axios'
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const idRef = useRef()
  const pwRef = useRef()
  const nav = useNavigate()

  const tryLogin=()=>{
    let id = idRef.current.value;
    let pw = pwRef.current.value;

    axios.post("http://localhost:8000/user/login", {
      id : id,
      pw : pw
    })
    .then((res)=>{
      console.log(res.data.nick);
    })
  }

  return (
    <div>
      ID : <input></input> <br />
      PW : <input></input> <br />
      <button onClick={tryLogin}>로그인 시도</button>
    </div>
  )
}

export default Login