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
    <>
      <TextMedium caption="judul" />
			<InputSection />
      <Gap className='h-3'/>
      <section className='max-w-screen-lg m-auto'>
        <CardsNotesContents data={dbNotArchived}/>
      </section>
      <Gap className='h-10'/>
      <TextMedium caption="archived notes"/>
      <Gap className='h-10'/>
      <section className='max-w-screen-lg m-auto'>
      {
        dbArchived.length > 0 ? (
          <CardsNotesContents data={dbArchived} />
        ) : (
          <>
          <p className='text-center'>kosong</p>
          <Gap className='h-10'/>
          </>
        )
      } 
      </section>
      
    </>
  )
}

export default NotesApp