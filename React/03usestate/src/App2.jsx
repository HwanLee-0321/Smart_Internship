import { useState } from 'react'
import './App.css'

function App2() {
  // 내가 버튼을 클릭했을 때, 클릭한 숫자와 랜덤한 숫자를 비교
  // 범위는 1~3

  // state선언
  // ranNum: 랜덤한 숫자 (1~3)
  // inputNum: 내가 클릭한 숫자
  const [ranNum, setRanNum] = useState(0)
  const [inputNum, setInputNum] = useState(0)

  // 함수 선언부
  const btnCk = (choice) => {
    // 1~3 범위의 랜덤한 숫자 생성
    const randomNum = Math.floor(Math.random() * 3) + 1;
    
    // state 업데이트
    setInputNum(choice);
    setRanNum(randomNum);
  }
 
  return(
    <div>
      <h3>숫자 맞추기 게임</h3>
      <div>
        <button onClick={() => btnCk(1)}>1</button>
        <button onClick={() => btnCk(2)}>2</button>
        <button onClick={() => btnCk(3)}>3</button>
      </div>

      <div>
        <p>내가 선택한 숫자: {inputNum}</p>
        <p>랜덤 숫자: {ranNum}</p>
        
        {/* 처음에는 보이지 않다가 버튼 클릭 후 결과 표시 */}
        {inputNum !== 0 && (
            <h4>{inputNum === ranNum ? '어캐맞춤?' : '이걸틀리네ㅋㅋ'}</h4>
        )}
      </div>
    </div>
  )
}
export default App2