import React from 'react';
import Menubox from './component/Menubox';
import './App.css';

const App2 = () => {
  let temp = 'ice ';
  return (
    <div className="menu-container">
      <Menubox temp={temp} name="아메리카노" price="3000"></Menubox>
      <Menubox temp={temp} name="카페라떼" price="4000"></Menubox>
      <Menubox temp={temp} name="아이스티" price="5000"></Menubox>
      <Menubox temp={temp} name="카푸치노" price="7000"></Menubox>
    </div>
  );
};

export default App2;