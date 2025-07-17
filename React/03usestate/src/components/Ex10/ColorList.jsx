import React, { useContext } from 'react'
// ColorContext를 임포트합니다.
import { ColorContext } from '../../context/Ex10ColorContext'

const ColorList = () => {
    // useContext 훅을 사용하여 ColorContext의 값을 가져옵니다.
    // 여기서는 setChoiceColor 함수만 필요하므로 구조 분해 할당을 사용합니다.
    const { setChoiceColor } = useContext(ColorContext)

    // 색상 배열을 정의합니다.
    const colors = ['red', 'orange', 'yellow', 'green', 'blue']
    
    return (
        <div style={{ display: 'flex' }}>
            {/* 
              colors 배열을 map 함수로 순회하면서 각 색상에 대한 div를 생성합니다.
              각 div는 100x100 크기를 가지며, 배경색은 해당 색상으로 설정됩니다.
            */}
            {colors.map(color => (
                <div 
                    key={color}
                    style={{
                        backgroundColor: color,
                        width: '100px',
                        height: '100px',
                        cursor: 'pointer'
                    }}
                    // div를 클릭하면 setChoiceColor 함수가 호출되어 Context의 choiceColor 값을 변경합니다.
                    onClick={() => setChoiceColor(color)}
                >
                </div>
            ))}
        </div>
    )
}

export default ColorList
