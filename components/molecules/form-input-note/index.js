import React from 'react'
import { InputTextMedium, InputTextLarge, ButtonLarge, Gap } from '../../../components'
const FormInputNote = ({onChangeTitle, onChangeContent, valueTitle, valueContent}) => {
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
      <ButtonLarge />
    </div>

  )
}

export default FormInputNote