import React from 'react'
import { CardNoteContent } from '../../../components'

const CardsNotesContents = ({arrayNotes}) => {
  return (
    <section className='flex flex-col gap-2 max-w-2xl m-auto'>
     {
       arrayNotes.map(notes => (
        <CardNoteContent key={Math.random()} notes={notes} />
       ))
     }
    
    </section>
  )
}

export default CardsNotesContents