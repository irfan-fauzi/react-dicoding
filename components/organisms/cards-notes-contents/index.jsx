import React, { useContext } from 'react'
import { CardNoteContent, TextMedium } from '../..'
import { AppContext } from '../../../utils/context/appContex'

const CardsNotesContents = ({ data }) => {
  const context = useContext(AppContext)
  const { colorNote } = context.stateColor
  return (
    <>
    {data.length ? (
    <section className='grid grid-cards gap-4'>
     {data.map((notes) =>
        (<CardNoteContent 
          key={Math.random()} 
          notes={notes}
          randomNumber={Math.floor(Math.random() * colorNote.length)}
        />))
     }
    </section>
    ) : (
      <TextMedium caption="tidak ada data" className='text-white'/>
    )}
    </>
  )
}

export default CardsNotesContents