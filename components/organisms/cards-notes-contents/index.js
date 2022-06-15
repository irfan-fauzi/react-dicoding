import React from 'react'
import { CardNoteContent } from '../../../components'

const CardsNotesContents = ({arrayNotes, onClickDeleteNote, onClickArsip}) => {
  return (
    <section className='grid grid-cards gap-1 max-w-screen-lg mx-auto'>
     {
       arrayNotes.map(notes => (
        <CardNoteContent 
          key={Math.random()} 
          notes={notes} 
          onClickDeleteNote={onClickDeleteNote}
          onClickArsip={onClickArsip}
          />
       ))
     }
    </section>
  )
}

export default CardsNotesContents