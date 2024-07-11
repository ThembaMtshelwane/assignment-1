import React from 'react'
import './button.css'

function Button({ name , styles=''}) {
  return <button className={styles}>{name}</button>
}

export default Button
