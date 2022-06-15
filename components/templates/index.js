import React, { useEffect, useState } from 'react'
import { getInitialData } from '../../utils/sampleNote'
import { CardsNotesContents, InputSection, Title } from '../../components'
import { Gap } from '../atoms'
import {changeStatusInner} from '../../utils/functions'

const NotesApp = () => {
  const [notesNotArchived, setNotesNotArchived] = useState([])
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [notesArchived, setNoteArchived] = useState([])

  useEffect(() => {
    setNotesNotArchived(getInitialData())
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

  const deleteNote = (id) => {
    const newNotes = notesNotArchived.filter(note => note.id !== id)
    setNotesNotArchived(newNotes)
  }

  const changeStatus = (note) => {
   setNoteArchived([...notesArchived, {
      id: note.id,
      title: note.title,
      body: note.body,
      createdAt: note.createdAt,
      archived: true,
   }])
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
      <CardsNotesContents 
        arrayNotes={notesNotArchived}
        onClickDeleteNote={deleteNote}
        onClickArsip={changeStatus} 
      />
      {
        console.log(notesArchived)
      }
    </>
  )
}

export default NotesApp