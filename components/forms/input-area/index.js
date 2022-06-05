import React from 'react'

const InputArea = ({eventOnChange}) => {
  return (
    <div>
      <input type="text" className='border border-black' onChange={eventOnChange}/>
    </div>
    
  )
}

export default InputArea