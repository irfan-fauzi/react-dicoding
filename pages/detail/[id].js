import React, { useContext } from 'react'
import {useRouter} from 'next/router'
import { AppContext } from '../../utils/context/appContex'
import DetailNotes from './detailNotes'

const Detail = () => {
  const router = useRouter()
  const {id} = router.query
  
  return (
    <DetailNotes id={id} />
  )
}

export default Detail