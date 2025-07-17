// React의 useState 훅과 JSON 데이터, 그리고 하위 컴포넌트를 임포트합니다.
import { useState } from 'react'
import data from './json/ex05data.json'
import Ex05Map from './components/Ex05Map.jsx'

function App4() {
  // filter 함수를 사용하여 data.result 배열에서 birthYear가 1994 이하인 요소만 필터링합니다.
  let filter_data = data.result.filter((item)=>(item.birthYear <= 1994))

  // 필터링된 데이터를 초기값으로 하는 'newArr' state를 생성합니다.
  const [newArr, setNewarr] = useState(filter_data)
  
  return(
    <div>
      <h1>Map 실습</h1>
      {/* flexbox를 사용하여 카드들을 가로로 배치합니다. */}
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {/* 
          data.result 배열을 map 함수로 순회하면서 각 item에 대해 Ex05Map 컴포넌트를 생성합니다.
          key, item prop을 전달합니다.
        */}
        {data.result.map((item, index)=>(
          <Ex05Map key={index} item={item}/>
        ))}
      </div>
      <br />
      {/* 
        filter 함수 설명:
        기존의 배열 데이터를 가져와서 주어진 조건에 맞는 데이터들만 모아
        새로운 배열로 반환하는 함수입니다.
      */}
      <p>1994년생과 나이가 같거나 많은 사람들만 출력하시오.</p>
      <div>
        {/* 'newArr' state를 map 함수로 순회하면서 각 사람의 title을 p 태그로 출력합니다. */}
        {newArr.map((item, index) => (
          <p key={index}>{item.title}</p>
        ))}
      </div>
    </div>
  )
}
export default App4