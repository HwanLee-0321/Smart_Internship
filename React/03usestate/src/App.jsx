// React의 useState 훅을 임포트합니다.
import { useState } from 'react'
// 이미지 파일을 임포트합니다.
import pic from '/img.gif'
// CSS 파일을 임포트합니다.
import './App.css'

function App() {
  // 'count'라는 state를 선언하고, 초기값을 0으로 설정합니다.
  const [count, setCount] = useState(0)
  // 'likeEmoji'라는 state를 선언하고, 초기값을 '♡'로 설정합니다.
  const [likeEmoji, setLikeEmoji] = useState('♡')
  // 'likeNum'이라는 state를 선언하고, 초기값을 0으로 설정합니다.
  const [likeNum, setLikeNum] = useState(0)

  // 'count' state를 1 증가시키는 함수입니다.
  const onIncrease = () => {
    setCount(count + 1);  
  }

  // 'count' state를 1 감소시키는 함수입니다. (단, 0보다 클 때만)
  const onDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  // 'likeEmoji' state를 '♡'와 '♥' 사이에서 토글하고, 'likeNum'을 증감시키는 함수입니다.
  const handleClick = () => {
    if (likeEmoji === '♡') {
      setLikeEmoji('♥');
      setLikeNum(likeNum + 1);
    } else {
      setLikeEmoji('♡');
      setLikeNum(likeNum - 1);
    }
  }


  return (
    <div> 
      {/* 주석 처리된 이미지 태그 */}
      {/* <img width="200px" src={pic} alt="" /> */}
      <p>
        {/* 이모지를 ���릭하면 handleClick 함수가 호출됩니다. */}
        <span onClick={handleClick}>{likeEmoji}</span>
        {/* 좋아요 수를 표시합니다. */}
        <span>{" "}좋아요 수: {likeNum}</span>
      </p>
      {/* 'count' state의 현재 값을 표시합니다. */}
      <h2>{count}</h2>  
      {/* '+' 버튼을 클릭하면 onIncrease 함수가 호출됩니다. */}
      <button onClick={onIncrease}>+</button>
      {/* '-' 버튼을 클릭하면 onDecrease 함수가 호출됩니다. */}
      <button onClick={onDecrease}>-</button>
    </div>
  )
}

export default App
