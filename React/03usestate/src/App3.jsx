// CSS 파일을 임포트합니다.
import './App3.css'

function App3() {
  // 사람 정보를 담고 있는 객체 배열입니다.
  let person = [
    {name: "멋쟁이재환", age: 21, bloodType: "B"},
    {name: "백지혜", age: 22, bloodType: "AB"},
    {name: "흑지혜", age: 22, bloodType: "BA"},
    {name: "QUIET준", age: 24, bloodType: "CUTE"}
  ]

  // 음식 정보를 담고 있는 문자열 배열입니다.
  let food = ['김치초콜릿', '민트초코국밥', '메뚜기돈가스']
 
  return(
    <div>
      <h3>[EGC INFO - 인덱스]</h3>
      {/* 배열의 각 요소를 인덱스를 통해 직접 접근하여 표시합니다. */}
      <p>이름:{" "}{person[0].name} / 나이:{" "}{person[0].age} / 혈액형:{" "}{person[0].bloodType}</p>
      <p>이름:{" "}{person[1].name} / 나이:{" "}{person[1].age} / 혈액형:{" "}{person[1].bloodType}</p>
      <p>이름:{" "}{person[2].name} / 나이:{" "}{person[2].age} / 혈액형:{" "}{person[2].bloodType}</p>
      <p>이름:{" "}{person[3].name} / 나이:{" "}{person[3].age} / 혈액형:{" "}{person[3].bloodType}</p>
      
      <h3>[EGC INFO - Map함수]</h3>
      {/* person 배열을 map 함수를 이용해 순회하며 각 사람의 정보를 동적으로 생성합니다. */}
      {person.map((item)=>(
        <p key={item.name}>이름:{" "}{item.name} / 나이:{" "}{item.age} / 혈액형:{" "}{item.bloodType}</p>
      ))}
      
      <div>
        <h3>오늘 뭐 먹지?</h3>
        <div className="food-container">
          {/* food 배열을 map 함수를 이용해 순회하며 각 음식에 대한 버튼을 생성합니다. */}
          {food.map((item, index) => (
            <button key={index} className="food-button">
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
export default App3