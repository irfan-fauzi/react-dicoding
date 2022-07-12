import React from 'react'

const ButtonSmall = ({title, className, onClick, children}) => {
  return (
    <button className={className}  onClick={onClick}>
      {title}
      {children}
    </button>
  )
}

export default ButtonSmall