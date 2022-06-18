import React from 'react'

const ButtonSmall = ({title, className, onClick}) => {
  return (
    <button 
      className={className} 
      onClick={onClick}>
      {title}
    </button>
  )
}

export default ButtonSmall