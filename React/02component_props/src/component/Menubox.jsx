import React from 'react'

const Menubox = (props) => {
  console.log(props.price)
  console.log(props.name)

  return (
    <div>
      <div>
            <h3>{props.name}</h3>
            <p>{props.price}</p>
        </div>
    </div>
  )
}

export default Menubox