import NoteContext from './noteContext';
import React, {useState} from 'react'

const NoteState = (props) => {
    const s1 = {
        "name": "Alpha",
        "class": "10C"
    }
    
    const [state, setState] = useState(s1);

    const update = () => {
        setTimeout(()=>{
            setState({
                "name":"Beta",
                "class": "2D"
            })
        }, 1000)
    }

    const [alert, setAlert] = useState(null);

    const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(()=>{
        setAlert(null);  
      }, 1500)
    }

    const [mode, setMode] = useState('light');
  
    const toggleMode = ()=>{
      if(mode === 'light'){
        setMode('dark')
        document.body.style.backgroundColor = '#042743';
        showAlert('Dark mode activated!', 'success');
      } else {
        setMode('light')
        document.body.style.backgroundColor = 'white';
        showAlert('Dark mode deactivated!', 'warning');
      }
    }

    const sampleNotes = [
        {
          "_id": "66f59d97d819d5eb52b15bcf",
          "user": "66f5921b529bbce42002ba62",
          "title": "My Title",
          "description": "My Desc",
          "tag": "My Tag",
          "date": "2024-09-26T17:44:55.408Z",
          "__v": 0
        },
        {
            "_id": "96519d97d819mnhgd5eb52b15bcf",
            "user": "66f5921b529bbce42002ba62",
            "title": "My Title 2",
            "description": "My Desc 2",
            "tag": "My Tag 2",
            "date": "2024-09-26T17:55:55.408Z",
            "__v": 0
        },
        {
            "_id": "96519d97d819ujmd5eb52b15bcf",
            "user": "66f5921b529bbce42002ba62",
            "title": "My Title 2",
            "description": "My Desc 2",
            "tag": "My Tag 2",
            "date": "2024-09-26T17:55:55.408Z",
            "__v": 0
        },
        {
            "_id": "96519d97d819d5eytrb52b15bcf",
            "user": "66f5921b529bbce42002ba62",
            "title": "My Title 2",
            "description": "My Desc 2",
            "tag": "My Tag 2",
            "date": "2024-09-26T17:55:55.408Z",
            "__v": 0
        },
        {
            "_id": "96519d97d819dwer5eb52b15bcf",
            "user": "66f5921b529bbce42002ba62",
            "title": "My Title 2",
            "description": "My Desc 2",
            "tag": "My Tag 2",
            "date": "2024-09-26T17:55:55.408Z",
            "__v": 0
        },
        {
            "_id": "96519d97d819d5sdeb52b15bcf",
            "user": "66f5921b529bbce42002ba62",
            "title": "My Title 2",
            "description": "My Desc 2",
            "tag": "My Tag 2",
            "date": "2024-09-26T17:55:55.408Z",
            "__v": 0
        },
        {
            "_id": "96519d97d819d5eb5s2b15bcf",
            "user": "66f5921b529bbce42002ba62",
            "title": "My Title 2",
            "description": "My Desc 2",
            "tag": "My Tag 2",
            "date": "2024-09-26T17:55:55.408Z",
            "__v": 0
        }
      ]
    const [notes, setNotes] = useState(sampleNotes);

    //   Add a note
      const addNote = (title, description, tag) => {
        const note =         {
            "_id": "96519d97d819d5eb5s2b15bcfada",
            "user": "66f5921b529bbce42002ba62",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2024-09-26T17:55:55.408Z",
            "__v": 0
        }
        setNotes(notes.concat(note));
      }

    // Delete a note
    const deleteNote = (id) => {
        const newNotes = notes.filter((note)=> {return note._id !== id})
        setNotes(newNotes);
    }

    // Edit a note
    const editNote = () => {
        
    }

    return (
        <NoteContext.Provider value={{
                state, update, notes, addNote, deleteNote, editNote, 
                alert, mode, toggleMode
            }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;