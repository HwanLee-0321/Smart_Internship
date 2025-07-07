import React from 'react'

const App3 = () => {
    
    // 사용자가 입력할 수 있는 
    let name = prompt('이름을 입력하세요.')

    // 내장 함수(객체) 불러오기
    let today = new Date()
    let date = today.toLocaleDateString()
    console.log(date)
    return (
        <div>App3</div>
    )
}

export default App3