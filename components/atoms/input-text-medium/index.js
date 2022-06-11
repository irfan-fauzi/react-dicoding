import React from 'react'

const InputTextMedium = ({onChangeTitle, valueTitle}) => {
  return (
    <>
      <input type="text" className='border border-black' placeholder='title note' onChange={onChangeTitle} value={valueTitle}/>
    </>
  )
}

export default InputTextMedium