import React, {useState, useRef, use} from 'react'
// useRef:
//        1. Dom구조 접근
//        2. 값을 반환

const App5 = () => {
    // Ref생성 => useRef기능을 countRef변수안에 담아준다
    const [count, setCount] = useState(0)
    const countRef = useRef(0);

    console.log(countRef.current)

    // 함수의 선언부
    const increaseState=()=>{
        setCount(count + 1);
    }
    // useRef안에 있는 값은 상태가 변할 때 값이 변한다 => useRef값은 렌더링에 관여하지 X
    // 상태 변경시 렌더링이 안 일어나게끔 처리하고 싶을 때
    const increaseRef=()=>{
        countRef.current += 1;
    }

    return (
        <div>
            <div>
                <p>state: {count}</p>
                <p>ref: {countRef.current} </p>
                <button onClick={increaseState}>state up</button>
                <button onClick={increaseRef}>ref up</button>
            </div>
        </div>
    )
}

export default App5