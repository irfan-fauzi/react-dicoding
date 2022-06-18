import React, { useContext } from 'react'
import { InputTextMedium, InputTextLarge, ButtonLarge, Gap } from '../../../components'
import { AppContext } from '../../../utils/context/appContex'

const FormInputNote = () => {
  const context = useContext(AppContext)
  const dbNoteNotArchived = context.stateDbNotArchived.dbNotArchived
  const createNote = () => {
    context.stateDbNotArchived.setDbNotArchived([...dbNoteNotArchived, {
      id: Math.random(),
      title: context.stateTitle.title,
      body: context.stateContent.content,
      createdAt: new Date(),
      archived: false,
    }])
    context.stateTitle.setTitle("")
    context.stateContent.setContent("")
  }
  return (
    <div className='max-w-lg px-3 m-auto'>
      <div className='flex flex-col'>
        <InputTextMedium 
          onChange={(e) => context.stateTitle.setTitle(e.target.value)}
          value={context.stateTitle.title}
          />
        <Gap className='h-3' />
        <InputTextLarge 
          onChange={(e) => context.stateContent.setContent(e.target.value)}
          value={context.stateContent.content}
        />
      </div>
      <Gap className='h-3' />
      <ButtonLarge onClick={createNote} title='add to note' />
    </div>

  )
}

export default FormInputNote