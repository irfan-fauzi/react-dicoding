import React from 'react'
import Button from '../button'
import {Gap} from '../../components'
import InputArea from './input-area'


const Form = () => {
  return (
    <div className='border flex flex-col items-center'>
      <InputArea/>
      <Gap className='h-2' />
      <InputArea />
      <Gap className='h-5' />
      <Button />
    </div>
  )
}

export default Form