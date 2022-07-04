import React from 'react'

const MainContainer = ({children}) => {
  return (
    <section className='max-w-screen-lg mx-auto px-3'>
      {children}
    </section>
  )
}

export default MainContainer