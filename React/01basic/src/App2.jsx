import React from 'react'
import './app2.css'


/*
  1. npm init vite
  2. variant [javascript + swc]
  3. cd [프로젝트 경로]
  4. npm i(nstall)
  5. npm run de 
  
  
  JSX문법: 하나의 파일 안에 HTML과 JS를 동시에 작성
  기존의 JS문법과 다른점
  
  1. 속성적용 시 class대신 className사용 
  2. 표현식이 사용가능 -> {}
  3. 조건에 따른 결과를 출력하는 방법
  3-1. 조건이 하나라면?( 단순 if문 )
    : && 연산자 사용
  3-2. 조건이 2개
    : 삼항 연산자 사용
  3-3. 조건이 3개 이상 ↑
    : return 문 위에 조건문을 사용
  4. 태그를 사용할 때
    : 무조건 소문자로!!
    : 대문자는 컴포넌트(파일)
  5. onclick() -> onClick()  -->> !!!카멜케이스로!!!
  6. style 속성 적용
  6-1. className 속성 적용 후, CSS파일 연결
  6-2. 객체형태로 삽입
  6-3. 인라인스타일 방식
 */

let msg = 'Hello ESG'
let islogin = true
let name = 'john doe'
let text = ''

// 조건문 생성
if (name == 'Alex duy'){
  text = 'adult'
} else if (name == 'john doe') {
  text = 'this is john doe' 
} else {
  text = 'who are you..?'
}

// 6-2. style 객체 형태로 정의
const welStyle = {
  fontSize : '50px',
  color : 'blue',
  backgroundColor: 'yellow'
}

const App2 = (/*파라미터 설정*/) => {
  return (
    // 태그들끼리는 서로 감싸줘야함
    <div>
      {/* 꼭 div 태그가 아니여도 되고, 빈 태그도 ㄱㅊㄱㅊ */}
      <div className='item'>{msg}</div>
      <div style={welStyle}>ESG</div>
      {/* 인라인 스타일 */}
      <div style={{
        fontSize: '30px',
        color: 'blue',
        backgroundColor: 'pink'
        }}>This is a text. {msg} </div>

      {/* 조건부 렌더링
          조건이 하나일 때 */}
      {islogin && 'Welcome master~'}

      {/* 조건이 2개 일 때 */}
      {name === 'john doe'? <p>Welcome john doe</p> : <p>You are not john doe</p> }

      {/* 조건이 3개 이상 */}
      {text}

    <p>
      <button onClick={/*실행되는 부분*/ () => {document.write('WOW Click!')} }>
        This is a button
      </button>
    </p>
    </div>
  )
}

export default App2