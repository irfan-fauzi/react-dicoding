import React, { useContext } from 'react'
import { NoteTitle, NoteContent, ButtonSmall, NoteCreatedDate } from '../../../components'
import { AppContext } from '../../../utils/context/appContex'
import { Gap } from '../../atoms'
import  {deleteItemDatabase, addToDatabase } from '../../../utils/functions'

const CardNoteContent = ({notes}) => {
  
  const context = useContext(AppContext)
  const { dbNotArchived, setDbNotArchived } = context.stateDbNotArchived
  const { dbArchived, setDbArchived} = context.stateDbArchived

  const changeStatusArchived = (note) => {
   if(!note.archived) {
      deleteItemDatabase(dbNotArchived, setDbNotArchived, note.id)
      addToDatabase(dbArchived, setDbArchived, note, true)
   } else {
      deleteItemDatabase(dbArchived, setDbArchived, note.id)
      addToDatabase(dbNotArchived, setDbNotArchived, note, false)
   }      
  }
  
  const deleteNote = (note) => {
    if(!note.archived){
      deleteItemDatabase(dbNotArchived, setDbNotArchived, note.id)
    } deleteItemDatabase(dbArchived, setDbArchived, note.id)
  }

  return (
    <article className='border border-black p-3'>
      <NoteTitle title={notes.title} />
      <NoteCreatedDate date={notes.createdAt}/>
      <NoteContent content={notes.body} />
      <Gap className='h-3' />
      <div className='flex w-full justify-between '>
        <ButtonSmall 
          title={notes.archived ? `pindahkan` : `arsipkan`} 
          className='bg-blue-300 px-4 py-2' 
          onClick={() => changeStatusArchived(notes)}
          />
        <ButtonSmall 
          title="hapus" 
          className='bg-red-400 px-4 py-2'
          onClick={() => deleteNote(notes)}
          />
      </div>
    
      <Gap className='h-3' />
    </article>
  )
}

export default CardNoteContent