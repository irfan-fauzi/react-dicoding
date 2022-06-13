import React, { useEffect, useState } from 'react'
import { getInitialData } from '../../utils/sampleNote'
import { CardsNotesContents, InputSection, Title } from '../../components'
import { Gap } from '../atoms'

const NotesApp = () => {
  const [arrayNotes, setArrayNotes] = useState([])
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [isArchived, setIsArchived] = useState(false)
  //const initialData = getInitialData()

  useEffect(() => {
    setArrayNotes(getInitialData())
    return () => {
      setArrayNotes([])
    }
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
    const newNotes = arrayNotes.filter(note => note.id !== id)
    setArrayNotes(newNotes)
  }

  const arsipNote = (id) => {
    
   let temp = arrayNotes.map(obj => {
    if(obj.id === id){
      setIsArchived(!isArchived)
      return {
        ...obj,
        archived: isArchived
      }
    }
    return {...obj}
   })
   setArrayNotes(temp)
   console.log(isArchived)
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
        arrayNotes={arrayNotes}
        onClickDeleteNote={deleteNote}
        onClickArsip={arsipNote} 
      />
    </>
  )
}

export default NotesApp