import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Main = () => {
    /* 
    Link 컴포넌트
        브라우저 주소의 경로만 바꾸는 기능이 내장되어 있다.
        생김새는 a태그와 같지 History API를 통해 이동이 가능하다.
        이때 일을 하는 친구가 BrowserRouter
    
    useNavigate
        import -> 'react-router-dom'
        요소에 넣어서 사용 가능하다 -> 페이지 이동을 도와주는 리액트 훅
    */

    const nav = useNavigate();

    // 로그인 상태
    let auth = false;

    return (
        <div>
            Main<br/>
            <Link to='/about'>About 페이지로 이동</Link><br />
            {/* 외부경로도 가능 */}
            <Link to='https:naver.com'>Naver이동</Link><br />
            {/* 삼항연산자
                auth변수가 참이라면   ? product 링크 이동
                auth변수가 거짓이라면 ? 그냥 이동X*/}
            <button onClick={()=>{
                auth ? nav('/product') : alert("로그인이 필요합니다.");
            }}>상품페이지 이동</button>
        </div>
    )
}

export default Main