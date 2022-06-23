import React, { useContext, useEffect } from 'react'
import { ButtonSmall, Gap, TextMedium } from '../../../components'
import { AppContext } from '../../../utils/context/appContex'
import {showFormattedDate} from '../../../utils/sampleNote'
import {AiOutlineSwap} from 'react-icons/ai'
import {BsBookmark} from 'react-icons/bs'

const CardNoteContent = ({notes, randomNumber}) => {

  const context = useContext(AppContext)
  const {colorNote} = context.stateColor
  const {changeStatusArchived, deleteNote} = context.action
  
  
  return (
    <article className={`${colorNote[randomNumber]} rounded-2xl p-3`}>
      <TextMedium caption={notes.title} />
      <TextMedium caption={showFormattedDate(notes.createdAt)} />
      <TextMedium caption={notes.body} className='line-clamp-3' />
      <Gap className='h-3' />
      <div className='flex w-full justify-between '>
        <ButtonSmall 
          className=' px-4 py-2' 
          onClick={() => changeStatusArchived(notes)}
          >{ notes.archived ? <AiOutlineSwap /> : <BsBookmark />}</ButtonSmall>
        <ButtonSmall 
          title="hapus" 
          className=' px-4 py-2'
          onClick={() => deleteNote(notes)}
          />
      </div>
      
      <Gap className='h-3' />
    </article>
  )
}

export default CardNoteContent