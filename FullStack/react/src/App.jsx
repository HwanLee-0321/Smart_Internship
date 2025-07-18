import { useState } from 'react';
// import './App.css'
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home'
import Join from './components/Join'
import Login from './components/Login'

function App() {

  return (
    // Route 세팅
    // '/' 메인주소로 가게되면 Join보여주기
    // '/Login' 메인주소로 가게되면 Join보여주기
    // '/Join' 메인주소로 가게되면 Join보여주기

    <>
      <div>
        <Routes>
          <Route path='/'     element={<Join/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/login'element={<Login/>}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
