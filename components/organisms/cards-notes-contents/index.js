import React from 'react'
import { CardNoteContent } from '../../../components'

const CardsNotesContents = ({data}) => {
  return (
    <section className='grid grid-cards gap-1 max-w-screen-lg mx-auto'>
     {
       data.map(notes => (
        <CardNoteContent 
          key={Math.random()} 
          notes={notes} 
        />
       ))
     }
    </section>
  )
}

export default CardsNotesContents