import React, { useEffect, useState } from 'react'
import { getInitialData } from '../../utils/sampleNote'
import { CardsNotesContents, InputSection, Title } from '../../components'
import { Gap } from '../atoms'

const NotesApp = () => {
  const [arrayNotes, setArrayNotes] = useState([])
  useEffect(() => {
    setArrayNotes(getInitialData())
  },[])

  return (
    <>
      <Title title="judul" />
			<InputSection />
      <Gap className='h-3' />
      <CardsNotesContents arrayNotes={arrayNotes} />
    </>
  )
}

export default NotesApp