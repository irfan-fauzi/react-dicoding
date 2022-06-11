import React from 'react'

const InputNoteTitle = ({onChangeTitle, valueTitle}) => {
  return (
    <>
      <input type="text" className='border border-black' placeholder='title note' onChange={onChangeTitle} value={valueTitle}/>
    </>
  )
}

export default InputNoteTitle