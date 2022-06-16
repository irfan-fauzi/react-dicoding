const addToDatabase = (database, setDataBase, objDatabase, status) => {
  setDataBase([...database, {
    id: objDatabase.id,
    title: objDatabase.title,
    body: objDatabase.body,
    createdAt: objDatabase.createdAt,
    archived: status
  }])
}

const deleteItemDatabase = (database, setDatabase, id) => {
  const newObj = database.filter(item => item.id !== id)
  return setDatabase(newObj)
}

export {addToDatabase, deleteItemDatabase}