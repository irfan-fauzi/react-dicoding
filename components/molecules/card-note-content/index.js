import React from 'react'
import { NoteTitle, NoteDate, NoteContent, ButtonSmall } from '../../atoms'

const CardNoteContent = () => {
  return (
    <>
      <h1>CardNoteContent</h1>
      <NoteTitle />
      <NoteDate />
      <NoteContent />
      <ButtonSmall />
    </>
  )
}

export default CardNoteContent