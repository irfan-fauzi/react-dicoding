import React, { useState } from 'react'
import Button from '../button'
import {Gap} from '../../components'
import InputArea from './input-area'


const Form = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [valueText, setValueText] = useState("")
  const [contacts, setContacts] = useState([])

  const setValueName = (e) => {
    setName(e.target.value)
  }

  const setValueEmail = (e) => {
    setEmail(e.target.value)
  }

  

  const saveInput = () => {
    if(!name){
      console.log("nama kosong")
      return false
    } else if(!email){
      console.log("email kosong")
      return false
    } else {
      setContacts([...contacts,{name, email}])
      setName("")
      setEmail("")
    }
    
  }


  return (
    <div className='border flex flex-col items-center'>
      <InputArea eventOnChange={setValueName} setValue={name}/>
      <Gap className='h-2' />
      <InputArea eventOnChange={setValueEmail} setValue={email}/>
      <Gap className='h-5' />
      <Button eventOnClick={saveInput} />
      
      <ul>
        {contacts.map(contact => (
          <div key={Math.random()}>
            <li>{contact.name}</li>
            <li>{contact.email}</li>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default Form