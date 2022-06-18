import { useState } from 'react'
import NotesApp from '../components/templates'
import { AppContext } from '../utils/context/appContex'


const Home = () => {
  const [notesNotArchived, setNotesNotArchived] = useState([])
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [notesArchived, setNoteArchived] = useState([])

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
