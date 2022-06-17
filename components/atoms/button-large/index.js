import React from 'react'

const ButtonLarge = ({onClick, title}) => {
  return (
    <button className='border border-black w-full bg-gray-200 py-2' onClick={onClick}>{title}</button>
  )
}

export default ButtonLarge