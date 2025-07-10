import React, { useRef } from 'react'
import './style/ex08_input.css'

const App7 = () => {
    const inputRef = useRef();

    const buttonClick=()=>{
        alert(inputRef.current.value);
        inputRef.current.value = '';
        inputRef.current.focus();
    }

    return (
        <div className='container'>
            <header className='header'>
                <h1>useRef Example</h1>
                <input type="text" placeholder='Enter Something' ref={inputRef} />
                <button onClick={buttonClick}>Show Input</button>
            </header>
        </div>
    )
}

export default App7