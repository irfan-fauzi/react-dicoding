const addToDatabase = (database, setDataBase, objDatabase, status) => {
  const arrcolor = ['bg-red-200', 'bg-blue-200', 'bg-yellow-200']
  setDataBase([...database, {
    id: objDatabase.id,
    title: objDatabase.title,
    body: objDatabase.body,
    createdAt: objDatabase.createdAt,
    archived: status,
    
  }])
}

const deleteItemDatabase = (database, setDatabase, id) => {
  const newObj = database.filter(item => item.id !== id)
  return setDatabase(newObj)
}

export {addToDatabase, deleteItemDatabase}