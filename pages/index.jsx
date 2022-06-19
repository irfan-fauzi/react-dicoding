import { useState } from 'react'
import NotesApp from '../components/templates'
import { AppContext } from '../utils/context/appContex'
import { deleteItemDatabase, addToDatabase } from '../utils/functions'

const Home = () => {
  const [notesNotArchived, setNotesNotArchived] = useState([])
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [notesArchived, setNoteArchived] = useState([])

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
  const changeStatusArchived = (note) => {
    if(!note.archived) {
       deleteItemDatabase(notesNotArchived, setNotesNotArchived, note.id)
       addToDatabase(notesArchived, setNoteArchived, note, true)
    } else {
       deleteItemDatabase(notesArchived, setNoteArchived, note.id)
       addToDatabase(notesNotArchived, setNotesNotArchived, note, false)
    }      
   }
   
  const deleteNote = (note) => {
     if(!note.archived){
       deleteItemDatabase(notesNotArchived, setNotesNotArchived, note.id)
     } deleteItemDatabase(notesArchived, setNoteArchived, note.id)
   }
  const contextValue = {
    stateDbArchived: {
      dbArchived: notesArchived,
      setDbArchived: setNoteArchived
    },
    stateDbNotArchived: {
      dbNotArchived: notesNotArchived,
      setDbNotArchived: setNotesNotArchived
    },
    stateTitle: {
      title,
      setTitle
    },
    stateContent: {
      content,
      setContent
    },
    action: {
      createNote,
      deleteNote,
      changeStatusArchived
    }
  } 

  return (
    <>
      <AppContext.Provider value={contextValue}>
        <NotesApp/>
     </AppContext.Provider> 
    </>
  )
}

export default Home
