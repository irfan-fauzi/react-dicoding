import React from 'react'

import { NoteTitle, NoteContent, ButtonSmall, NoteCreatedDate } from '../../../components'
import { Gap } from '../../atoms'

const CardNoteContent = ({notes, onClickDeleteNote, onClickArsip}) => {
  
  return (
    <article className='border border-black p-3'>
      <NoteTitle title={notes.title} />
      <NoteCreatedDate date={notes.createdAt}/>
      <NoteContent content={notes.body} />
      <Gap className='h-3' />
      <div className='flex w-full justify-between '>
        <ButtonSmall 
          title="arsipkan" 
          className='bg-blue-300 px-4 py-2' 
          onClickArsip={onClickArsip}
          param={notes}
          />
        <ButtonSmall 
          title="hapus" 
          className='bg-red-400 px-4 py-2'
          onClickDeleteNote={onClickDeleteNote}
          param={notes.id}
          />
      </div>
      <Gap className='h-3' />
    </article>
  )
}

export default CardNoteContent