import React from 'react'
import { InputNoteTitle, InputNoteContent, ButtonLarge, Gap } from '../../../components'
const FormInputNote = () => {
  return (
    <div className='max-w-lg px-3 m-auto'>
      <div className='flex flex-col'>
        <InputNoteTitle />
        <Gap className='h-3' />
        <InputNoteContent />
      </div>
      <Gap className='h-3' />
      <ButtonLarge />
    </div>

  )
}

export default FormInputNote