import React from 'react';
import Menubox from './component/Menubox';
import Member from './component/Member';
import './App2.css';
const App2 = () => {
  let temp = 'ice ';
  return (
    <div className="menu-container">
      <Menubox temp={temp} name="아메리카노" price="3000"></Menubox>
      <Menubox temp={temp} name="카페라떼" price="4000"></Menubox>
      <Menubox temp={temp} name="아이스티" price="5000"></Menubox>
      <Menubox temp={temp} name="카푸치노" price="7000"></Menubox>
      <Member name="이재환" sub="리액트" mbti="HANDSOME"></Member>
      <Member name="류지성" sub="리액트" mbti="HANDSOME"></Member>
      <Member name="김승용" sub="리액트" mbti="HANDSOME"></Member>
      <Member name="이민호" sub="리액트" mbti="HANDSOME"></Member>
      <Member name="진솔뽝" sub="리액트" mbti="CUTE"></Member>
      <Member name="백지혜" sub="리액트" mbti="CUTE"></Member>
      <Member name="박은빈" sub="리액트" mbti="!!404!! NOTFOUND "></Member>
    </div>
  );
};

export default App2;