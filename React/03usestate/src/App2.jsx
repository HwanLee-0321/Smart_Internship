// React의 useState 훅을 임포트합니다.
import { useState } from 'react'
// CSS 파일을 임포트합니다.
import './App.css'

function App2() {
  // 사용자가 버튼을 클릭했을 때, 클릭한 숫자와 랜덤 숫자를 비교하는 게임입니다.
  // 랜덤 숫자의 범위는 1~3입니다.

  // state를 선언합니다.
  // ranNum: 1~3 사이의 랜덤 숫자를 저장합니다.
  // inputNum: 사용자가 클릭한 숫자를 저장합니다.
  const [ranNum, setRanNum] = useState(0)
  const [inputNum, setInputNum] = useState(0)

  // 버튼 클릭 시 호출되는 함수입니다.
  const btnCk = (choice) => {
    // 1~3 범위의 랜덤한 숫자를 생성합니다.
    const randomNum = Math.floor(Math.random() * 3) + 1;
    
    // state를 업데이트합니다.
    setInputNum(choice);
    setRanNum(randomNum);
  }
 
  return(
    <div>
      <h3>숫자 맞추기 게임</h3>
      <div>
        {/* 각 버튼을 클릭하면 btnCk 함수가 해당 숫자와 함께 호출됩니다. */}
        <button onClick={() => btnCk(1)}>1</button>
        <button onClick={() => btnCk(2)}>2</button>
        <button onClick={() => btnCk(3)}>3</button>
      </div>

      <div>
        {/* 사용자가 선택한 숫자와 랜덤 숫자를 화면에 표시합니다. */}
        <p>내가 선택한 숫자: {inputNum}</p>
        <p>랜덤 숫자: {ranNum}</p>
        
        {/* 처음에는 보이지 않다가 버튼 클릭 후 결과를 표시합니다. */}
        {/* inputNum이 0이 아닐 때만 결과 메시지를 렌더링합니다. */}
        {inputNum !== 0 && (
            <h4>{inputNum === ranNum ? '어캐맞춤?' : '이걸틀리네ㅋㅋ'}</h4>
        )}
      </div>
    </div>
  )
}
export default App2