import React, { useContext } from 'react'
import { InputTextMedium, InputTextLarge, ButtonLarge, Gap } from '../../../components'
import { AppContext } from '../../../utils/context/appContex'

const FormInputNote = ({onChangeTitle, onChangeContent}) => {
  const context = useContext(AppContext)
  return (
    <div className='max-w-lg px-3 m-auto'>
      <div className='flex flex-col'>
        <InputTextMedium 
          onChange={onChangeTitle}
          value={context.title}
          />
        <Gap className='h-3' />
        <InputTextLarge 
          onChangeContent={onChangeContent}
          valueContent={va}
        />
      </div>
      <Gap className='h-3' />
      <ButtonLarge />
    </div>

  )
}

export default FormInputNote