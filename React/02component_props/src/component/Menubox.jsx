import React from 'react';

const Menubox = (props) => {
  // 부모(상위) 컴포터넌트로부터 받아올 데이터는 매개변수를 통해서 가져올 수 있다
  // 넘어온 데이터 탑은 객체형태로 전달된다

  return (
    <div className="menu-card">
      <h3>
        {props.temp}
        {props.name}
      </h3>
      <p>{Number(props.price).toLocaleString()}원</p>
    </div>
  );
};

export default Menubox;
