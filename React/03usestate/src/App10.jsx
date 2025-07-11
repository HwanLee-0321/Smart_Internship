import React, {useState} from 'react'
// 하위컴포넌트 및 컨텍스트 임포트
import ColorList from './components/Ex10/ColorList'
import ColorResult from './components/Ex10/ColorResult'
import { ColorContext } from './context/Ex10ColorContext'

const App10 = () => {
    // Context란? 리액트 컴포넌트 간에 값을 전역적으로 공유할 수 있게 하는 기능
    // props로만 데이터를 전달했을 때 => 디렉토리의 구조가 깊어지면 오류 및 불편함.

    // conText 만드는 순서
    // XXContext.js => createContext import해오기 => export 변수명 = createContext(null)
    // return안에 있는 요소를 컨텍스트로 감싸주기
    // 컨텍스트 안에 프로바이더 속성 적용하기

    const [choiceColor, setChoiceColor] = useState('red')
        
    return (
        <ColorContext.Provider value={{choiceColor, setChoiceColor}}>
            <div style={{margin: '2%'}}>
                <h1>색상 변경하기</h1>
                <ColorList></ColorList>
                <br />
                <hr />
                <br />
                <h1>선택한 색상</h1>
                <ColorResult></ColorResult>
            </div>
        </ColorContext.Provider>
    )
}

export default App10