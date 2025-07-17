import React, {useState} from 'react'
// 하위 컴포넌트 및 Context를 임포트합니다.
import ColorList from './components/Ex10/ColorList'
import ColorResult from './components/Ex10/ColorResult'
import { ColorContext } from './context/Ex10ColorContext'

const App10 = () => {
    // Context란? React 컴포넌트 트리 안에서 전역적으로 데이터를 공유할 수 있게 해주는 기능입니다.
    // props를 통해 데이터를 전달하는 방식(prop drilling)의 단점을 해결할 수 있습니다.

    // Context 사용 순서:
    // 1. context/XXContext.js 파일에서 createContext를 사용하여 Context 객체를 생성하고 export 합니다.
    // 2. 데이터를 공유할 최상위 컴포넌트에서 <Context.Provider>로 하위 컴포넌트들을 감싸줍니다.
    // 3. Provider의 value prop에 공유할 데이터를 전달합니다.
    // 4. 데이터를 사용할 하위 컴포넌트에서 useContext 훅을 사용하여 데이터를 가져옵니다.

    // 'choiceColor' state를 선언하고, 초기값을 'red'로 설정합니다.
    const [choiceColor, setChoiceColor] = useState('red')
        
    return (
        // ColorContext.Provider를 통해 choiceColor와 setChoiceColor를 하위 컴포넌트에 제공합니다.
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