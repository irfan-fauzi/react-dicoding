import React, { useState } from 'react'
import Button from '../button'
import {Gap, ListsContacts} from '../../components'
import InputArea from './input-area'


const Form = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [contacts, setContacts] = useState([{
    id: 1,
    name: "irfan",
    email: "irfan@yahoo.com"
  }])

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
      setContacts([...contacts,{id: Math.random(),name, email}])
      setName("")
      setEmail("")
    }
    
  }

  const deleteContact = (id) => {
    const newContacts = contacts.filter(contact => contact.id !== id)
    setContacts(newContacts)
  }

  return (
    <div className='border flex flex-col items-center'>
      <InputArea eventOnChange={setValueName} setValue={name}/>
      <Gap className='h-2' />
      <InputArea eventOnChange={setValueEmail} setValue={email}/>
      <Gap className='h-5' />
      <Button eventOnClick={saveInput} />
      <Gap className='h-5' />
      <ListsContacts contacts={contacts} eventOnClick={deleteContact} />
    </div>
  )
}

export default Form