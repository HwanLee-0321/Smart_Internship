import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const onIncrease = () => {
    setCount(count + 1);
  }

  const onDecrease = () => {
    setCount(count - 1);  
  }

  return (
    <div> 
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  )
}

export default App
