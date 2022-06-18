import React from 'react'

const InputTextLarge = ({onChange, value}) => {
  return (
    <>
      <textarea name="note-content" id="" cols="30" rows="10" className='border border-black' placeholder='note content' onChange={onChange} value={value}></textarea>
    </>
  )
}

export default InputTextLarge