import { useState } from 'react'
import data from './json/ex05data.json'
import Ex05Map from './components/Ex05Map.jsx'

function App4() {
 
  return(
    <div>
      <h1>Map 실습</h1>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {/* 우리가 가지고 온 json파일을 활용해서 하위 컴포넌트로 값을 전달하기 */}
        {data.result.map((item, index)=>(
          <Ex05Map key={index} item={item}/>
        ))}
      </div>
    </div>
  )
}
export default App4