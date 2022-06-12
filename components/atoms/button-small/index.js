import React from 'react'

const ButtonSmall = ({title, className, onClickDeleteNote, onClickArsip, param}) => {
  return (
    <button 
      className={className} 
      onClick={title == 'hapus' ? 
        () => onClickDeleteNote(param) : 
        () => onClickArsip(param)}>
      {title}
    </button>
  )
}

export default ButtonSmall