import { useState } from 'react'
import pic from '/img.gif'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const onIncrease = () => {
    setCount(count + 1);  
  }

  const onDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div> 
      <img width="200px" src={pic} alt="" />
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  )
}

export default App
