import React from 'react'
import { CardNoteContent, TextMedium } from '../../../components'

const CardsNotesContents = ({data}) => {
  return (
    <>
    {data.length ? (
    <section className='grid grid-cards gap-1'>
     {
       data.map(notes => (
        <CardNoteContent 
          key={Math.random()} 
          notes={notes} 
        />
       ))
     }
    </section>
    ) : (
      <TextMedium caption="tidak ada data" />
    )
    }
    </>
  )
}

export default CardsNotesContents