import React, { useEffect, useState } from 'react'

import { NoteTitle, NoteContent, ButtonSmall, NoteCreatedDate } from '../../../components'
import { Gap } from '../../atoms'

const CardNoteContent = ({notes}) => {
  
  return (
    <article className='border border-black p-3'>
      <NoteTitle title={notes.title} />
      <NoteCreatedDate date={notes.createdAt}/>
      <NoteContent content={notes.body} />
      <Gap className='h-3' />
      <div className='flex w-full justify-between '>
        <ButtonSmall />
        <ButtonSmall />
      </div>
      <Gap className='h-3' />
    </article>
  )
}

export default CardNoteContent