import React, { useContext, useEffect, useState } from 'react'
import { getInitialData } from '../../utils/sampleNote'
import { CardsNotesContents, InputSection, Title } from '../../components'
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
      <Title title="judul" />
			<InputSection />
      <Gap className='h-3'/>
      <CardsNotesContents data={dbNotArchived}/>
      <Gap className='h-10'/>
      <p className='text-center'>archived note :</p>
      <Gap className='h-10'/>
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
      
    </>
  )
}

export default NotesApp