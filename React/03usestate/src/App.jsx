import { useState } from 'react'
import pic from '/img.gif'
import './App.css'

function App() {
  // state 생성
  const [count, setCount] = useState(0)
  const [likeEmoji, setLikeEmoji] = useState('♡')
  const [likeNum, setLikeNum] = useState(0)

  const onIncrease = () => {
    setCount(count + 1);  
  }

  const onDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }

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
      {/* <img width="200px" src={pic} alt="" /> */}
      <p>
        <span onClick={handleClick}>{likeEmoji}</span>
        <span>{" "}좋아요 수: {likeNum}</span>
      </p>
      <h2>{count}</h2>  
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  )
}

export default App
