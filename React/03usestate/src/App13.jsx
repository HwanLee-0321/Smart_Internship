// React의 useState, useEffect 훅을 임포트합니다.
import React, {useState, useEffect} from 'react'

const App13 = () => {
    // 컴포넌트 초기화 시점에 로그를 출력합니다.
    console.log('a. Func init');

    // 'num' state를 선언하고, 초기값을 0으로 설정합니다.
    const [num, setNum] = useState(0)
    // 버튼 클릭 시 'num' state를 1 증가시키는 함수입니다.
    const btnCk=()=>{
        setNum(num + 1)
    }

    // useEffect(콜백함수, [의존성 배열])
    // 의존성 배열: 콜백 함수가 의존하는 값들의 배열입니다. 배열 안의 값이 변경될 때만 콜백 함수가 실행됩니다.

    // 1. 컴포넌트가 처음 마운트될 때 한 번만 실행됩니다.
    // 의존성 배열이 비어있기 때문입니다.
    useEffect(()=>{
        console.log('c. Mount')
    }, [])

    // 2. 'num' state가 변경될 때마다 실행됩니다.
    // 의존성 배열에 'num'이 포함되어 있기 때문입니다.
    useEffect(()=>{
        console.log('update')   
    }, [num])
    
    return (
        <div>
            {/* 렌더링 시점에 로그를 출력합니다. */}
            {console.log('b. Rendering')}
            <h1>function conter: {num}</h1>
            <button onClick={btnCk}>+1</button>
        </div>
    )
}

export default App13