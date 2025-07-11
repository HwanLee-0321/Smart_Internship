import React, { useContext } from 'react'
import { ColorContext } from '../../context/Ex10ColorContext'

const ColorResult = () => {

  const { choiceColor } = useContext(ColorContext)

  return (
    <div>
        <p>선택한 색상은 "{choiceColor}"입니다.</p>
        <div style={{
          width: '50px',
          height: '50px',
          backgroundColor: choiceColor
        }}></div>
    </div>
  )
}

export default ColorResult
