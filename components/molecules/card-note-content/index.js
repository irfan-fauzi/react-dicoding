import React, { useContext } from 'react'
import { ButtonSmall, Gap, TextMedium } from '../../../components'
import { AppContext } from '../../../utils/context/appContex'
import {showFormattedDate} from '../../../utils/sampleNote'

const CardNoteContent = ({notes}) => {

  const context = useContext(AppContext)
  const {changeStatusArchived, deleteNote} = context.action

  return (
    <article className='border border-black p-3'>
      <TextMedium caption={notes.title} />
      <TextMedium caption={showFormattedDate(notes.createdAt)} />
      <TextMedium caption={notes.body} />
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