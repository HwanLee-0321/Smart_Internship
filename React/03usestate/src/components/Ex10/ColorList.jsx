import React, { useContext } from 'react'
import { ColorContext } from '../../context/Ex10ColorContext'

const ColorList = () => {
    // context를 사용하겠다 => import {useContext} from 'react'
    // 데이터 가지고 오기
    const { setChoiceColor } = useContext(ColorContext)

    const colors = ['red', 'orange', 'yellow', 'green', 'blue']
    
    return (
        <div style={{ display: 'flex' }}>
            {/* map함수를 통해서 color변수 안에 있는 색상을 화면에 출력하기
            높이: 100, 너비 100  */}
            {colors.map(color => (
                <div 
                    key={color}
                    style={{
                        backgroundColor: color,
                        width: '100px',
                        height: '100px',
                        cursor: 'pointer'
                    }}
                    onClick={() => setChoiceColor(color)}
                >
                </div>
            ))}
        </div>
    )
}

export default ColorList
