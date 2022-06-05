import React from 'react'

const InputArea = ({eventOnChange, setValue}) => {
  return (
    <div>
      <input type="text" className='border border-black' onChange={eventOnChange} value={setValue}/>
    </div>
    
  )
}

export default InputArea