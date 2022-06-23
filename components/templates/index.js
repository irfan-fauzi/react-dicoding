import React, { useContext, useEffect } from 'react'
import { getInitialData } from '../../utils/sampleNote'
import { CardsNotesContents, InputSection, TextMedium } from '../../components'
import { Gap } from '../atoms'
import { AppContext } from '../../utils/context/appContex'

const NotesApp = () => {

  const context = useContext(AppContext)
  const { dbNotArchived, setDbNotArchived } = context.stateDbNotArchived
  const { dbArchived } = context.stateDbArchived
  
  useEffect(() => {
    setDbNotArchived(getInitialData())
    return () => {
      setDbNotArchived([])
    }
  },[])
  
  return (
    <div className='font-montserrat bg-gray-800'>
      <Gap className='h-3'/>
      <section className='max-w-screen-lg mx-auto p-3'>
      <TextMedium caption="Notes" className='text-white text-2xl'/>
      </section>
			
      <Gap className='h-3'/>
      <section className='max-w-screen-lg m-auto p-3'>
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
    </div>
  )
}

export default NotesApp