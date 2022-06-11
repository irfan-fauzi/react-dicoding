import React from 'react'

const ButtonLarge = ({onClickAddNote}) => {
  return (
    <button className='border border-black w-full bg-gray-200 py-2' onClick={onClickAddNote}>Tambahkan</button>
  )
}

export default ButtonLarge