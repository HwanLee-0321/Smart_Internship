import React from 'react'
import { TodoContext } from './context/Ex12TodoContext'
import List from './components/Ex12/List'
import AddItem from './components/Ex12/AddItem'
import '../src/style/ex12.css'

const App12 = () => {
  return (
    <div className='container'>
      <h1>Todo List</h1>
      <AddItem/>
      <List/>
    </div>
  )
}

export default App12