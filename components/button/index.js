import React from 'react'

const Button = ({eventOnClick}) => {
  return (
    <div>
      <button className='border px-10 py-3 bg-green-300' onClick={eventOnClick}>tambah</button>
    </div>
  )
}

export default Button