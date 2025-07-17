import React, { useContext } from 'react'
// ColorContext를 임포트합니다.
import { ColorContext } from '../../context/Ex10ColorContext'

const ColorResult = () => {
  // useContext 훅을 사용하여 ColorContext의 값을 가져옵니다.
  // 여기서는 choiceColor 값만 필요합니다.
  const { choiceColor } = useContext(ColorContext)

  return (
    <div>
        {/* Context에서 받아온 choiceColor 값을 화면에 표시합니다. */}
        <p>선택한 색상은 "{choiceColor}"입니다.</p>
        {/* 선택된 색상을 배경으로 ���는 50x50 크기의 div를 표시합니다. */}
        <div style={{
          width: '50px',
          height: '50px',
          backgroundColor: choiceColor
        }}></div>
    </div>
  )
}

export default ColorResult
