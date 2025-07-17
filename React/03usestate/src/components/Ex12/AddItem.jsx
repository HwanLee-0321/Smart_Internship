import React, { useContext } from 'react';
// TodoContext를 임포트합니다.
import { TodoContext } from '../../context/Ex12TodoContext';

const AddItem = () => {
  // useContext 훅을 사용하여 TodoContext로부터 필요한 state와 함수를 가져옵니다.
  const {newTodo, setNewTodo, handleNewTodoAddition} = useContext(TodoContext);

  return (
    <div>
      {/* 
        input 값이 변경될 때마다 setNewTodo 함수를 호출하여 newTodo state를 업데이트합니다.
        value prop을 통해 input의 값을 newTodo state와 동기화합니다.
      */}
      <input type="text" onChange={(e)=>setNewTodo(e.target.value)} value={newTodo}/>
      {/* '추가' 버튼을 클릭하면 handleNewTodoAddition 함수가 호출됩니다. */}
      <button onClick={handleNewTodoAddition}>추가</button>
    </div>
  )
}

export default AddItem