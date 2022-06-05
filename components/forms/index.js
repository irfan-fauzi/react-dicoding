import React, { useState } from 'react'
import Button from '../button'
import {Gap} from '../../components'
import InputArea from './input-area'


const Form = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const setValueName = (e) => {
    setName(e.target.value)
  }

  const setValueEmail = (e) => {
    setEmail(e.target.value)
  }

  const saveInput = () => {
    console.log(name, email)
  }

  return (
    <div className='border flex flex-col items-center'>
      <InputArea eventOnChange={setValueName} />
      <Gap className='h-2' />
      <InputArea eventOnChange={setValueEmail} />
      <Gap className='h-5' />
      <Button eventOnClick={saveInput} />
    </div>
  )
}

export default Form