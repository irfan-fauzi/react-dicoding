import React, {useState, useEffect} from 'react'
import { showFormattedDate } from '../../../utils/sampleNote'

const NoteCreatedDate = ({date}) => {
  return (
    <div>{showFormattedDate(date)}</div>
  )
}

export default NoteCreatedDate