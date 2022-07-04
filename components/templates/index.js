import React, { useContext, useEffect } from 'react'
import { getInitialData } from '../../utils/sampleNote'
import { CardsNotesContents, InputSection, TextMedium, MainContainer } from '../../components'
import { ButtonSmall, Gap } from '../atoms'
import { AppContext } from '../../utils/context/appContex'
import { AiOutlinePlus } from 'react-icons/ai'

const NotesApp = () => {

  const context = useContext(AppContext)
  const { dbNotArchived, setDbNotArchived } = context.stateDbNotArchived
  const { dbArchived } = context.stateDbArchived
  const { isShowForm, setIsShowForm } = context.stateShowForm
  const {showWarningDelete, setShowWarningDelete} = context.stateShowWarningDelete
  
  useEffect(() => {
    setDbNotArchived(getInitialData())
    return () => {
      setDbNotArchived([])
    }
  },[])
  
  return (
    <div className='font-montserrat bg-gray-800'>
      {isShowForm && (
          <InputSection />
        )}
      <Gap className='h-8'/>
      <MainContainer>
        <TextMedium caption="Notes" className='text-white text-2xl'/>
        <Gap className='h-5'/>
        <CardsNotesContents data={dbNotArchived}/>
        <Gap className='h-10'/>
        <TextMedium caption="archived notes" className='text-white'/>
        <Gap className='h-5'/>
        <CardsNotesContents data={dbArchived}/>
      </MainContainer>
      <Gap className='h-10'/>
      <ButtonSmall onClick={() => setIsShowForm(true)} className='bg-gray-700 rounded-full p-4 fixed bottom-5 right-5 '>
        <AiOutlinePlus size={27} color='white'/>
      </ButtonSmall>
      {
        showWarningDelete && (
          <div className='w-full bg-red-500'>
            <p className='text-2xl'>apakah anda yakin</p>
            <button onClick={() => setShowWarningDelete(false)} className='border'>tidak</button>
          </div>
        )
      }
      
    </div>
  )
}

export default NotesApp