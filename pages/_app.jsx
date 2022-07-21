/* eslint-disable consistent-return */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-no-constructed-context-values */
import { useState } from 'react';
import '../styles/globals.css';
import { AppContext } from '../utils/context/appContex';
import { deleteItemDatabase, addToDatabase } from '../utils/functions';

function MyApp({ Component, pageProps }) {
  const [notesNotArchived, setNotesNotArchived] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isShowForm, setIsShowForm] = useState(false);
  const [notesArchived, setNoteArchived] = useState([]);
  const [colorNote, setColorNote] = useState(['bg-red-200', 'bg-blue-200', 'bg-yellow-200', 'bg-purple-200']);
  const [warningDelete, setWarningDelete] = useState(false);
  const [value, setValue] = useState({});
  const [isShowDetail, setIsShowDetail] = useState(false);
  const [warningMsg, setWarningMsg] = useState('');

  const setInputType = (e, maxChar, setTypeInput) => {
    const char = e.target.value;
    const n = char.substring(0, maxChar);
    setTypeInput(n);
  };
  const createNote = () => {
    if (!title) {
      setWarningMsg('title harus di isi');
      return false;
    } if (!content) {
      setWarningMsg('konten harus di isi');
      return false;
    }
    setNotesNotArchived([...notesNotArchived, {
      id: Math.random(),
      title,
      body: content,
      createdAt: new Date(),
      archived: false,
    }]);
    setTitle('');
    setContent('');
    setIsShowForm(false);
  };
  const changeStatusArchived = (note) => {
    if (!note.archived) {
      deleteItemDatabase(notesNotArchived, setNotesNotArchived, note.id);
      addToDatabase(notesArchived, setNoteArchived, note, true);
    } else {
      deleteItemDatabase(notesArchived, setNoteArchived, note.id);
      addToDatabase(notesNotArchived, setNotesNotArchived, note, false);
    }
  };
  const showDetail = (note) => {
    setIsShowDetail(true);
    setValue(note);
  };
  const deleteNote = (note) => {
    if (!note.archived) {
      deleteItemDatabase(notesNotArchived, setNotesNotArchived, note.id);
    } deleteItemDatabase(notesArchived, setNoteArchived, note.id);
  };

  const beforeDelete = (note) => {
    setValue(note);
    setWarningDelete(true);
  };
  const contextValue = {
    stateDbArchived: {
      dbArchived: notesArchived,
      setDbArchived: setNoteArchived,
    },
    stateDbNotArchived: {
      dbNotArchived: notesNotArchived,
      setDbNotArchived: setNotesNotArchived,
    },
    stateTitle: {
      title,
      setTitle,
    },
    stateContent: {
      content,
      setContent,
    },
    stateColor: {
      colorNote,
      setColorNote,
    },
    stateShowForm: {
      isShowForm,
      setIsShowForm,
    },
    stateValue: {
      value,
      setValue,
    },
    stateWarningDelete: {
      warningDelete,
      setWarningDelete,
    },
    stateShowDetail: {
      isShowDetail,
      setIsShowDetail,
    },
    stateWarningMsg: {
      warningMsg,
      setWarningMsg,
    },
    action: {
      createNote,
      deleteNote,
      beforeDelete,
      changeStatusArchived,
      showDetail,
      setInputType,
    },
  };
  return (
    <AppContext.Provider value={contextValue}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
