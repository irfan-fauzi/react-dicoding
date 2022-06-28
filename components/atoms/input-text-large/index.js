import React from 'react'

const InputTextLarge = ({onChange, value, className, placeholder}) => {
  return (
    <>
      <textarea name="note-content" id="" cols="50" rows="13" className={className} placeholder={placeholder} onChange={onChange} value={value}></textarea>
    </>
  )
}

export default InputTextLarge