import React from 'react'
import style from './Foodinput.module.css'

const Foodinput = ({handleKeyDowm}) => {
  return (
    <div>
      <input type="search" name="search" id={style.Search} onKeyDown={handleKeyDowm}/>
    </div>
  )
}

export default Foodinput
