import React from 'react'
import { FormInputNote } from '../../../components'
const InputSection = ({onChangeTitle, onChangeContent}) => {
  return (
    <section>
      <FormInputNote 
        onChangeTitle={onChangeTitle}
        onChangeContent={onChangeContent}
      />
    </section>
  )
}

export default InputSection