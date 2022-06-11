import React from 'react'
import { FormInputNote } from '../../../components'
const InputSection = ({onChangeTitle, onChangeContent, valueTitle, valueContent, onClickAddNote}) => {
  return (
    <section>
      <FormInputNote 
        onChangeTitle={onChangeTitle}
        onChangeContent={onChangeContent}
        valueTitle={valueTitle}
        valueContent={valueContent}
        onClickAddNote={onClickAddNote}  
      />
    </section>
  )
}

export default InputSection