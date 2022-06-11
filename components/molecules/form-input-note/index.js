import React from 'react'
import { InputNoteTitle, InputNoteContent, ButtonLarge, Gap } from '../../../components'
const FormInputNote = ({onChangeTitle, onChangeContent, valueTitle, valueContent}) => {
  return (
    <div className='max-w-lg px-3 m-auto'>
      <div className='flex flex-col'>
        <InputNoteTitle 
          onChangeTitle={onChangeTitle}
          valueTitle={valueTitle}
          />
        <Gap className='h-3' />
        <InputNoteContent 
          onChangeContent={onChangeContent}
          valueContent={valueContent}
        />
      </div>
      <Gap className='h-3' />
      <ButtonLarge />
    </div>

  )
}

export default FormInputNote