import React, {useState, useEffect} from 'react'

const App13 = () => {
    console.log('a.함수초기화');

    const [num, setNum] = useState(0)
    const btnCk=()=>{
        setNum(num + 1)
    }
    return (
        <div>
            {console.log('b. 렌더링')}
            <h1>function conter: {num}</h1>
            <button onClick={btnCk}>+1</button>
        </div>
    )
}

export default App13