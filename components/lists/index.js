import React from 'react'
import ItemContact from './items'
const ListsContacts = ({contacts, eventOnClick}) => {
  return (
     <ul className='flex flex-col gap-2'>
        {contacts.map(contact => (
          <ItemContact key={contact.id} contact={contact} eventOnClick={eventOnClick} />
        ))}
     </ul> 
  )
}

export default ListsContacts