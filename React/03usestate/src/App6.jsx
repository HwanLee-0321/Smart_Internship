import React, {useRef} from 'react'

const App6 = () => {

    // useRef: 특징 DOM을 선택하고 싶을 때
    // JS => getElementById, querySelector을 통해서 접근
    // React에서도 클릭, 마우스르르 올렸을 때 => DOM요소를 접근해서 변경

    // useRef 사용하기
    const divRef = useRef()

    let divStyle = {
        backgroundColor: 'skyblue',
        width: '200px',
        height: '200px',
        marginTop: '3%'
    }

    const handleSizeChange = (width, height) => {
        divRef.current.style.width = width;
        divRef.current.style.height = height;
    }

    return (
        <div>
            <div>
                <button onClick={() => handleSizeChange('100px', '100px')}>작게</button>
                <button onClick={() => handleSizeChange('200px', '200px')}>원본</button>
                <button onClick={() => handleSizeChange('300px', '300px')}>크게</button>
            </div>

            {/* ref속성 => 접근하고자 하는 요소에 속성으로 넣어주면 된다. */}
            <div ref={divRef} style={divStyle}>

            </div>
        </div>
    )
}

export default App6