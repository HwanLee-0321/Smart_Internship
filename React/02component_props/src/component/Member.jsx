import React from 'react'

const Member = ({name, sub, mbti}) => {
   return (
    <div className="menu-card">
      <h3>
        {name}
      </h3>
      <p>{sub}</p>
      <p>{mbti}</p>
    </div>
  );
}

export default Member