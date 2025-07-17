// React의 useState, useRef 훅을 임포트합니다.
import React, {useState, useRef} from 'react'

// useRef:
// 1. DOM 요소에 직접 접근할 때 사용합니다.
// 2. 렌더링 사이에 값을 유지하지만, 값이 변경되어도 리렌더링을 유발하지 않는 변수를 만들 때 사용합니다.

const App5 = () => {
    // 'count' state를 선언하고, 초기값을 0으로 설정합니다.
    const [count, setCount] = useState(0)
    // 'countRef' ref를 생성하고, 초기값을 0으로 설정합니다.
    const countRef = useRef(0);

    // ref의 현재 값은 .current 속성을 통해 접근할 수 있습니다.
    console.log(countRef.current)

    // state를 1 증가시키는 함수입니다. 이 함수가 호출되면 컴포넌트가 리렌더링됩니다.
    const increaseState=()=>{
        setCount(count + 1);
    }

    // ref를 1 증가시키는 함수입니다. 이 함수가 호출되어도 컴포넌트는 리렌더링되지 않습니다.
    // ref 값의 변경은 렌더링에 영향을 주지 않습니다.
    const increaseRef=()=>{
        countRef.current += 1;
    }

    return (
        <div>
            <div>
                {/* state와 ref의 현재 값을 화면에 표시합니다. */}
                <p>state: {count}</p>
                <p>ref: {countRef.current} </p>
                {/* 버튼을 클릭하여 state와 ref 값을 각각 증가시킵니다. */}
                <button onClick={increaseState}>state up</button>
                <button onClick={increaseRef}>ref up</button>
            </div>
        </div>
    )
}

export default App5