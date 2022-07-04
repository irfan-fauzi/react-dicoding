import React, { useContext, useEffect } from 'react'
import { ButtonSmall, Gap, TextMedium } from '../../../components'
import { AppContext } from '../../../utils/context/appContex'
import {showFormattedDate} from '../../../utils/sampleNote'
import {AiOutlineSwap} from 'react-icons/ai'
import {BsBookmark, BsFillJournalBookmarkFill} from 'react-icons/bs'
import {FiTrash} from 'react-icons/fi'

const CardNoteContent = ({notes, randomNumber}) => {

  const context = useContext(AppContext)
  const {colorNote} = context.stateColor
  const {changeStatusArchived} = context.action
  const {setShowWarningDelete} = context.stateShowWarningDelete
  
  
  return (
    <article className={`${colorNote[randomNumber]} rounded-2xl p-4`}>
      <Gap className='h-1' />
      <TextMedium className='text-xl font-semibold' caption={notes.title} />
      <Gap className='h-3' />
      <TextMedium caption={notes.body} className='font-medium text-gray-800 line-clamp-4' />
      <Gap className='h-3' />
      <TextMedium className='text-xs text-gray-700' caption={showFormattedDate(notes.createdAt)} />
      <Gap className='h-5' />
      <div className='flex w-full justify-between'>
        <ButtonSmall 
          className='flex px-3 items-center gap-1 rounded-lg bg-white' 
          onClick={() => changeStatusArchived(notes)}
          >{ notes.archived ? <AiOutlineSwap /> : <BsFillJournalBookmarkFill />}<TextMedium caption={notes.archived ? 'undo' : 'arsipkan'} className='text-xs' /></ButtonSmall>
        <ButtonSmall  
          className='flex items-center p-3 gap-1 rounded-lg bg-white'
          onClick={() => setShowWarningDelete(true)}
          ><FiTrash  /><TextMedium caption='hapus' className='text-xs' /></ButtonSmall>
      </div>
      <Gap className='h-2' />
      
    </article>
  )
}

export default CardNoteContent