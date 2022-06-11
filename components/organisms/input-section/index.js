import React from 'react'
import { FormInputNote } from '../../../components'
const InputSection = ({onChangeTitle, onChangeContent, valueTitle, valueContent}) => {
  return (
    <section>
      <FormInputNote 
        onChangeTitle={onChangeTitle}
        onChangeContent={onChangeContent}
        valueTitle={valueTitle}
        valueContent={valueContent}  
      />
    </section>
  )
}

export default InputSection