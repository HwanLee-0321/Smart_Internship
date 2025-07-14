import React, {useState, useEffect} from 'react'

const App13 = () => {
    console.log('a. Func init');

    const [num, setNum] = useState(0)
    const btnCk=()=>{
        setNum(num + 1)
    }

    // useEffect(()=>{}, [])
    // [ 변화를 감지할 대상 ] 의존성 배열
    // 배열 안 데이터는 복수개로 처리 가능

    useEffect(()=>{
        console.log('c. Mount')
    }, [])

    // num이라는 state가 변할때마다 실행되는 출력문
    useEffect(()=>{
        console.log('update')   
    }, [num])
    
    return (
        <div>
            {console.log('b. Rendering')}
            <h1>function conter: {num}</h1>
            <button onClick={btnCk}>+1</button>
        </div>
    )
}

export default App13