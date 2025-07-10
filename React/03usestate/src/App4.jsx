import { useState } from 'react'
import data from './json/ex05data.json'
import Ex05Map from './components/Ex05Map.jsx'

function App4() {
  // filter
  let filter_data = data.result.filter((item)=>(item.birthYear <= 1994))

  // state생성
  const [newArr, setNewarr] = useState(filter_data)
  return(
    <div>
      <h1>Map 실습</h1>
      {/* flex: 부모요소들을 가로로 배치 */}
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {/* 우리가 가지고 온 json파일을 활용해서 하위 컴포넌트로 값을 전달하기 */}
        {data.result.map((item, index)=>(
          <Ex05Map key={index} item={item}/>
        ))}
      </div>
      <br />
      {/* filter 함수
          기존의 배열 데이터를 가져와서 주어진 조건에 맞는 데이터들만 모아
          새로운 배열로 반환하는 함수 */}
      <p>1994년생과 나이가 같거나 많은 사람들만 출력하시오.</p>
      {/* map함수를 통해서 화면에 출력 */}
      <div>
        {newArr.map((item, index) => (
          <p key={index}>{item.title}</p>
        ))}
      </div>
    </div>
  )
}
export default App4