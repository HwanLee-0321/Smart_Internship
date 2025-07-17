import React, { useState } from 'react'
import { TodoContext } from './context/Ex12TodoContext'
import List from './components/Ex12/List'
import AddItem from './components/Ex12/AddItem'
import '../src/style/ex12.css'

const App12 = () => {
  // 할일 담아주는 배열생성
  const [todo, setTodo] = useState([
    {text: '물 마시기', completed: false, key: 1},
  ]);

  // 할 일을 추가해주는 스테이트 생성
  const [newTodo, setNewTodo] = useState('');

  // newTodo 스테이트에 할 일들을 추가하는 함수 생성
  const hadleNewTodoAddition=()=>{

  }

  return (
    <TodoContext.Provider value={{todo, newTodo, setNewTodo, hadleNewTodoAddition}}>
      <div className='todo-container'>
        <h1>😎 TODO LIST 😎</h1>
        <List />
        <AddItem />
      </div>  
    </TodoContext.Provider>
    
  )
}

export default App12