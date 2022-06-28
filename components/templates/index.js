import React, { useContext, useEffect, useState } from 'react'
import { getInitialData } from '../../utils/sampleNote'
import { CardsNotesContents, InputSection, TextMedium } from '../../components'
import { ButtonSmall, Gap } from '../atoms'
import { AppContext } from '../../utils/context/appContex'
import { AiOutlinePlus } from 'react-icons/ai'

const NotesApp = () => {

  const context = useContext(AppContext)
  const { dbNotArchived, setDbNotArchived } = context.stateDbNotArchived
  const { dbArchived } = context.stateDbArchived
  const { isShowForm, setIsShowForm } = context.stateShowForm
  
  useEffect(() => {
    setDbNotArchived(getInitialData())
    return () => {
      setDbNotArchived([])
    }
  },[])
  
  return (
    <div className='font-montserrat bg-gray-800'>
      {
        isShowForm && (
          <InputSection />
        )
      }
       
      <Gap className='h-8'/>
      <section className='max-w-screen-lg mx-auto px-3'>
        <TextMedium caption="Notes" className='text-white text-2xl'/>
      </section>
      <Gap className='h-5'/>
      <section className='max-w-screen-lg m-auto px-4 '>
        <CardsNotesContents data={dbNotArchived}/>
      </section>
      <Gap className='h-10'/>
      <section className='max-w-screen-lg m-auto p-3'>
        <TextMedium caption="archived notes"/>
      </section>
      <Gap className='h-10'/>
      <section className='max-w-screen-lg m-auto p-3'>
        <CardsNotesContents data={dbArchived}/>
      </section>
      <Gap className='h-10'/>
      <ButtonSmall onClick={() => setIsShowForm(true)} className='bg-gray-700 rounded-full p-4 fixed bottom-5 right-5 '>
        <AiOutlinePlus size={20} color='white'/>
      </ButtonSmall>
     
    </div>
  )
}

export default NotesApp