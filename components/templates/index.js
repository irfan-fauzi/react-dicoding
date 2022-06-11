import React, { useEffect, useState } from 'react'
import { getInitialData } from '../../utils/sampleNote'
import { CardsNotesContents, InputSection, Title } from '../../components'
import { Gap } from '../atoms'

const NotesApp = () => {
  const [arrayNotes, setArrayNotes] = useState([])
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  useEffect(() => {
    setArrayNotes(getInitialData())
  },[])

  return (
    <>
      <Title title="judul" />
			<InputSection 
        onChangeTitle={(e) => setTitle(e.target.value)}
        onChangeContent={(e) => setContent(e.target.value)} 
        valueTitle={title}
        valueContent={content}
        />
      <Gap className='h-3'/>
      
      <CardsNotesContents arrayNotes={arrayNotes} />
    </>
  )
}

export default NotesApp