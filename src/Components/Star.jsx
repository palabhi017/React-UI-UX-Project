import React from 'react'
import { BsFillStarFill, BsStar} from 'react-icons/bs';
const Star = ({ value, filled, onClick }) => {

    const starClassName = filled ? 'star filled' : 'star';
  return (
    <span
      className={starClassName}
      onClick={() => onClick(value)}
      role="button"
      tabIndex={0}
      style={{marginLeft:"5px"}}
    >
      {filled? <BsFillStarFill size={"30px"}/>: <BsStar size={"30px"}/>}
    </span>
  )
}

export default Star