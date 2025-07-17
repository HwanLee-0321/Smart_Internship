import React, { useState } from 'react'
// Context와 하위 컴포넌트, CSS 파일을 임포트합니다.
import { TodoContext } from './context/Ex12TodoContext'
import List from './components/Ex12/List'
import AddItem from './components/Ex12/AddItem'
import '../src/style/ex12.css'

const App12 = () => {
  // 할 일 목록을 저장하는 'todo' state를 선언합니다.
  // 초기값으로 객체를 담은 배열을 설정합니다.
  const [todo, setTodo] = useState([
    {text: '물 마시기', completed: false, key: 1},
  ]);

  // 새로 추가할 할 일 내용을 저장하는 'newTodo' state를 선언합니다.
  const [newTodo, setNewTodo] = useState('');

  // 새로운 할 일을 목록에 추가하는 함수입니다.
  const handleNewTodoAddition=()=>{
    // newTodo가 비어있지 않을 때만 실행합니다.
    if (newTodo.trim() !== '') {
      // 기존 todo 배열에 새로운 할 일 객체를 추가하여 새로운 배열을 만듭니다.
      const newTodoList = [...todo, { text: newTodo, completed: false, key: Date.now() }];
      // todo state를 새로운 배열로 업데이트합니다.
      setTodo(newTodoList);
      // newTodo input을 비웁니다.
      setNewTodo('');
    }
  }

  return (
    // TodoContext.Provider를 통해 todo 관련 state와 함수를 하위 컴포넌트에 제공합니다.
    <TodoContext.Provider value={{todo, setTodo, newTodo, setNewTodo, handleNewTodoAddition}}>
      <div className='todo-container'>
        <h1>😎 TODO LIST 😎</h1>
        <List />
        <AddItem />
      </div>  
    </TodoContext.Provider>
    
  )
}

export default App12