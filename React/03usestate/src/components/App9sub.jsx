import React from 'react'

const App9sub = ({ item, changeData }) => {
    return (
        <div>
            <p>
                1-2.하위 컴포넌에서 입력받은 값은 "{item}"입니다.
            </p>
            <p>
                2-1. 하위에서 입력: <input type="text" onChange={(e) => changeData(e.target.value)}/>
            </p>
        </div>
    )
}

export default App9sub