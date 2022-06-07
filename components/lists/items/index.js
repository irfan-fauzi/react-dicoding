import React from 'react'

const ItemContact = ({contact, eventOnClick}) => {
  return (
    <div key={contact.id} className="border flex items-center gap-10 border-black p-3 justify-between">
      <ul className='flex flex-col'>
          <li>{contact.name}</li>
          <li>{contact.email}</li>
       </ul>
       <ul>
         <button className='border px-4 py-2 bg-red-400 text-white hover:bg-red-600' onClick={() => eventOnClick(contact.id)}>hapus</button>
       </ul>
    </div>
  )
}

export default ItemContact