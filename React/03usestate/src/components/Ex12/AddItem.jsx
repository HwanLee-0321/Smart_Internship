import React, { useState,useContext } from 'react';
import List from './List';
import { TodoContext } from '../../context/Ex12TodoContext';

const AddItem = () => {
  // 함수들 불러오기
  const {newTodo, setNewTodo, handleNewTodoAddition} = useContext(TodoContext);

  return (
    <div>
      <input type="text" onChange={(e)=>setNewTodo(e.target.value)} value={newTodo}/>
      <button onClick={handleNewTodoAddition}>추가</button>
    </div>
  )
}

export default AddItem