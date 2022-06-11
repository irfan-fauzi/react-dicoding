import React from 'react'
import { InputTextMedium, InputTextLarge, ButtonLarge, Gap } from '../../../components'
const FormInputNote = ({onChangeTitle, onChangeContent, valueTitle, valueContent, onClickAddNote}) => {
  return (
    <div className='max-w-lg px-3 m-auto'>
      <div className='flex flex-col'>
        <InputTextMedium 
          onChangeTitle={onChangeTitle}
          valueTitle={valueTitle}
          />
        <Gap className='h-3' />
        <InputTextLarge 
          onChangeContent={onChangeContent}
          valueContent={valueContent}
        />
      </div>
      <Gap className='h-3' />
      <ButtonLarge onClickAddNote={onClickAddNote} />
    </div>

  )
}

export default FormInputNote