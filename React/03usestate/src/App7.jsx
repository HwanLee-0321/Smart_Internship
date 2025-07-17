// React의 useRef 훅과 CSS 파일을 임포트합니다.
import React, { useRef } from 'react'
import './style/ex08_input.css'

const App7 = () => {
    // input 요소를 참조하기 위한 ref를 생성합니다.
    const inputRef = useRef();

    // 버튼 클릭 시 실행되는 함수입니다.
    const buttonClick=()=>{
        // inputRef.current.value를 통해 input 요소의 현재 값을 가져와 alert 창으로 보여줍니다.
        alert(inputRef.current.value);
        // input 값을 비웁니다.
        inputRef.current.value = '';
        // input 요소에 포커스를 줍니다.
        inputRef.current.focus();
    }

    return (
        <div className='container'>
            <header className='header'>
                <h1>useRef Example</h1>
                {/* ref 속성을 사용하여 이 input 요소를 inputRef와 연결합니다. */}
                <input type="text" placeholder='Enter Something' ref={inputRef} />
                <button onClick={buttonClick}>Show Input</button>
            </header>
        </div>
    )
}

export default App7