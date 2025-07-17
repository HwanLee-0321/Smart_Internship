import React from 'react'

// 부모 컴포넌트(App9)로부터 item과 changeData를 props로 받습니다.
const App9sub = ({ item, changeData }) => {
    return (
        <div>
            <p>
                {/* 부모로부터 받은 item 값을 화면에 표시합니다. */}
                1-2.하위 컴포넌트에서 입력받은 값은 "{item}"입니다.
            </p>
            <p>
                2-1. 하위에서 입력: 
                {/* 
                  input 값이 변경될 때마다 부모로부터 받은 changeData 함수를 호출하여
                  변경된 값을 부모 컴포넌트로 전달합니다.
                */}
                <input type="text" onChange={(e) => changeData(e.target.value)}/>
            </p>
        </div>
    )
}

export default App9sub