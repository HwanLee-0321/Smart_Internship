import React from 'react';

const Menubox = (props) => {
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
