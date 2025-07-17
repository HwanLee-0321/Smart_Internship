// React의 useState 훅과 하위 컴포넌트를 임포트합니다.
import React, {useState} from 'react'
import App9sub from './components/App9sub'

const App9 = () => {
    // 컴포넌트 간의 값 전달 예제입니다.
    // App9는 부모 컴포넌트, App9sub는 자식 컴포넌트입니다.

    // state를 선언합니다.
    // inputTitle: 상위 컴포넌트의 input 값을 저장합니다.
    // rcTitle: 하위 컴포넌트로부터 전달받은 값을 저장합니다.
    const[inputTitle, setInputTitle] = useState(' ')
    const[rcTitle, setRcTitle] = useState(' ')

    // 하위 컴포넌트로부터 데이터를 받아 rcTitle state를 변경하는 함수입니다.
    const changeData=(e)=>{
        setRcTitle(e);
    }

    return (
      <div>
        <h2>컴포넌트끼리 값 전달하기</h2>
        <p>
            1-1. 상위에서 입력
            {/* input 값이 변경될 때마다 inputTitle state를 업데이트합니다. */}
            <input type="text" onChange={(e)=>{
                setInputTitle(e.target.value);
            }} />
        </p>
        {/* 
          하위 컴포넌트(App9sub)를 렌더링하고 props를 통해 데이터를 전달합니다.
          - item: inputTitle state 값을 전달��니다.
          - changeData: changeData 함수를 전달합니다.
        */}
        <App9sub item={inputTitle} changeData={changeData}></App9sub>
        <span>2-2. 상위에서 입력받은 값은 "{rcTitle}"입니다.</span>
      </div>
    )
}

export default App9