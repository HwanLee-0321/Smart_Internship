import React, {useState} from 'react'
import App9sub from './components/App9sub'

const App9 = () => {
    // 컴포넌트끼리 값 전달하기
    // App09 => 부모요소, App09Sub=>자식요소

    // state생성 => inputTitle, rcTitle => 초기값은 ''
    const[inputTitle, setInputTitle] = useState(' ')
    const[rcTitle, setRcTitle] = useState(' ')

    // 함수생성 => 하위컴포넌트로 전달
    const changeData=(e)=>{
        setRcTitle(e);
    }

    return (
      <div>
        <h2>컴포넌트끼리 값 전달하기</h2>
        <p>
            1-1. 상위에서 입력
            <input type="text" onChange={(e)=>{
                setInputTitle(e.target.value);
            }} />
        </p>
        {/* 하위 컴포넌트 불러와서 props방식으로 값 전달 */}
        <App9sub item={inputTitle} changeData={changeData}></App9sub>
        <span>2-2. 상위에서 입력받은 값은 "{rcTitle}"입니다.</span>
      </div>
    )
}

export default App9