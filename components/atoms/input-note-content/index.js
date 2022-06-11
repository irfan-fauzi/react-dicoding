import React from 'react'

const InputNoteContent = ({onChangeContent, valueContent}) => {
  return (
    <>
      <textarea name="note-content" id="" cols="30" rows="10" className='border border-black' placeholder='note content' onChange={onChangeContent} value={valueContent}></textarea>
    </>
  )
}

export default InputNoteContent