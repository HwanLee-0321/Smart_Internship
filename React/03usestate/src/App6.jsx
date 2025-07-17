// React의 useRef 훅을 임포트합니다.
import React, {useRef} from 'react'

const App6 = () => {

    // useRef는 특정 DOM 요소를 선택하고 싶을 때 사용됩니다.
    // JavaScript의 getElementById, querySelector와 유사한 역할을 합니다.
    // React에서는 이벤트 핸들러 내에서 DOM 요소에 접근하여 스타일 등을 변경할 수 있습니다.

    // div 요소를 참조하기 위한 ref를 생성합니다.
    const divRef = useRef()

    // div에 적용할 기본 스타일 객체입니다.
    let divStyle = {
        backgroundColor: 'skyblue',
        width: '200px',
        height: '200px',
        marginTop: '3%'
    }

    // div의 너비와 높이를 변경하는 함수입니다.
    const handleSizeChange = (width, height) => {
        // divRef.current는 참조하고 있는 DOM 요소를 가리킵니다.
        divRef.current.style.width = width;
        divRef.current.style.height = height;
    }

    return (
        <div>
            <div>
                {/* 각 버튼을 클릭하면 handleSizeChange 함수가 호출되어 div 크기를 변경합니다. */}
                <button onClick={() => handleSizeChange('100px', '100px')}>작게</button>
                <button onClick={() => handleSizeChange('200px', '200px')}>원본</button>
                <button onClick={() => handleSizeChange('300px', '300px')}>크게</button>
            </div>

            {/* ref 속성을 사용하여 이 div 요소를 divRef와 연결합니다. */}
            <div ref={divRef} style={divStyle}>

            </div>
        </div>
    )
}

export default App6