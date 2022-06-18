import React from 'react'

const InputTextMedium = ({onChange, value}) => {
  return (
    <>
      <input type="text" className='border border-black' placeholder='title note' onChange={onChange} value={value}/>
    </>
  )
}

export default InputTextMedium