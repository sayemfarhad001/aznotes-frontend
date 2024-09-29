import NoteContext from './noteContext';
import React, {useState} from 'react'

const NoteState = (props) => {
    const host = "http://localhost:5000"
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
      const addNote = async (title, description, tag) => {
        // ADD API CALL
        const url = `${host}/api/notes/addnote`
        const response = await fetch(url,{
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZmNTkyMWI1MjliYmNlNDIwMDJiYTYyIn0sImlhdCI6MTcyNzM2OTc4N30.MF4NWwdwljLGUSbbTmGh_1Eixcvr5vdWXl1L1hWdJ30"
            },
            body: JSON.stringify({title, description, tag})
        })
        const json =  response.json();
        
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
        // TODO API CALL
        const newNotes = notes.filter((note)=> {return note._id !== id})
        setNotes(newNotes);
    }

    // Edit a note
    const editNote = async (id, title, description, tag) => {
        // EDIT API CALL
        const url = `${host}/api/notes/updatenote/${id}`
        const response = await fetch(url,{
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZmNTkyMWI1MjliYmNlNDIwMDJiYTYyIn0sImlhdCI6MTcyNzM2OTc4N30.MF4NWwdwljLGUSbbTmGh_1Eixcvr5vdWXl1L1hWdJ30"
            },
            body: JSON.stringify({title, description, tag})
        })
        const json =  response.json();

        //Logic to edit in Frontend
        for (let i = 0; i<notes.length; i++){
            const note = notes[i];
            if(note._id === id){
                note.title = title;
                note.description = description;
                note.tag = tag;
            }
        }
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