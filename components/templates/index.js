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

  const createNote = () => {
    setArrayNotes([...arrayNotes, {
      id: Math.random(),
      title: title,
      body: content,
      createdAt: new Date(),
      archived: false,
    }])
    setTitle("")
    setContent("")
  }
  return (
    <>
      <Title title="judul" />
			<InputSection 
        onChangeTitle={(e) => setTitle(e.target.value)}
        onChangeContent={(e) => setContent(e.target.value)} 
        valueTitle={title}
        valueContent={content}
        onClickAddNote={createNote}
        />
      <Gap className='h-3'/>
      
      <CardsNotesContents arrayNotes={arrayNotes} />
    </>
  )
}

export default NotesApp