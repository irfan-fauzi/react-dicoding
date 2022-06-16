import React, { useEffect, useState } from 'react'
import { getInitialData } from '../../utils/sampleNote'
import { CardsNotesContents, InputSection, Title } from '../../components'
import { Gap } from '../atoms'
import { addToDatabase, deleteItemDatabase } from '../../utils/functions'

const NotesApp = () => {
  const [notesNotArchived, setNotesNotArchived] = useState([])
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [notesArchived, setNoteArchived] = useState([])

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

  
  const deleteNote = (note) => {
    if(!note.archived){
      deleteItemDatabase(notesNotArchived, setNotesNotArchived, note.id)
    } deleteItemDatabase(notesArchived, setNoteArchived, note.id)
  }

  const changeStatus = (note) => {
   if(!note.archived) {
      deleteItemDatabase(notesNotArchived, setNotesNotArchived, note.id)
      addToDatabase(notesArchived, setNoteArchived, note, true)
   } else {
      deleteItemDatabase(notesArchived, setNoteArchived, note.id)
      addToDatabase(notesNotArchived, setNotesNotArchived, note, false)
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