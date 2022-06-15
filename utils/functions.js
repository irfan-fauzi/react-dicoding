const changeStatusInner = (id, allNotes, newValue) => {
  let temp = allNotes.map(obj => {
    if(obj.id === id){
      return {
        ...obj,
        archived : newValue
      }
    }
    return {...obj}
   })
  return temp 
}

export {changeStatusInner}