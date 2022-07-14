import React, { useContext } from 'react'
import { InputTextMedium, InputTextLarge, ButtonSmall, Gap } from '../..'
import { AppContext } from '../../../utils/context/appContex'
import { FiChevronLeft } from 'react-icons/fi'

const FormInputNote = () => {
  const context = useContext(AppContext)
  const { setIsShowForm } = context.stateShowForm
  const { createNote } = context.action
  return (
    <div>
      <Gap className='h-5' />
      <div className='flex w-full justify-between'>
        <ButtonSmall onClick={() => setIsShowForm(false)} className='bg-gray-800 p-3 rounded-xl' 
          ><FiChevronLeft size={20} color='white' /></ButtonSmall>
        <ButtonSmall onClick={createNote} className='bg-gray-800 px-6 rounded-xl text-white' title='save'></ButtonSmall>
      </div>
      <Gap className='h-5' />
      <div className='flex flex-col'>
        <InputTextMedium 
          onChange={(e) => context.stateTitle.setTitle(e.target.value)}
          value={context.stateTitle.title}
          className='bg-gray-800 text-white p-3 rounded-lg text-2xl'
          placeholder='Title'
          />
        <Gap className='h-5' />
        <InputTextLarge 
          onChange={(e) => context.stateContent.setContent(e.target.value)}
          value={context.stateContent.content}
          className='bg-gray-800 text-white rounded-lg p-3'
          placeholder='isi notes ...'
        />
      </div>
      <Gap className='h-3' />
      
    </div>

  )
}

export default FormInputNote