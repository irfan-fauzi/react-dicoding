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
  const [isArchived, setIsArchived] = useState(true)

  useEffect(() => {
    setNotesNotArchived(getInitialData())
  },[])

  const createNote = () => {
    setNotesNotArchived([...notesNotArchived, {
      id: Math.random(),
      title: title,
      body: content,
      createdAt: new Date(),
      archived: false,
    }])
    setTitle("")
    setContent("")
  }

  const deleteNote = (notes) => {
    if(notes.archived == false) {
      const newNotes = notesNotArchived.filter(note => note.id !== notes.id)
      setNotesNotArchived(newNotes)
    } else {
      const temp = notesArchived.filter(note => note.id !== notes.id)
      setNoteArchived(temp)
    }
    
  }

  

  const changeStatus = (note) => {
   if(note.archived == false) {
      const arr = notesNotArchived.filter(el => el.id !== note.id)
      setNotesNotArchived(arr)
      setNoteArchived([...notesArchived, {
        id: note.id,
        title: note.title,
        body: note.body,
        createdAt: note.createdAt,
        archived: true,
      }])
   } else {
     const arr = notesArchived.filter(el => el.id !== note.id)
     setNoteArchived(arr)
     setNotesNotArchived([...notesNotArchived, {
        id: note.id,
        title: note.title,
        body: note.body,
        createdAt: note.createdAt,
        archived: false,
     }])
   }
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
      <Gap className='h-10'/>
      <p className='text-center'>archived note :</p>
      <Gap className='h-10'/>
      {
        notesArchived.length > 0 ? (
          <CardsNotesContents 
            arrayNotes={notesArchived}
            onClickDeleteNote={deleteNote}
            onClickArsip={changeStatus} 
          />
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