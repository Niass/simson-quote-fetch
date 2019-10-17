import React from 'react';
import './Button.css'

const Button = (props) => {
  return (
    <button className='' onClick={props.onHandleClick}>
      {props.content}
    </button>
  )
}


export default Button;