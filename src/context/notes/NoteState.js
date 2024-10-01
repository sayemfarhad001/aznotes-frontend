import NoteContext from './noteContext';
import React, {useState} from 'react'

const NoteState = (props) => {
    //CONTEXT STATE - ABOUT PAGE
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

    //CONTEXT ALERT - NAVBAR
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

    //CONTEXT MODE - NAVBAR, APP
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

    //CRUD
    const base_url = process.env.REACT_APP_BASE_URL;
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
    const initialNotes = [];  
    const [notes, setNotes] = useState(initialNotes);

    // Get all notes
    const getNotes = async () => {
        // API CALL
        const url = `${base_url}/api/notes/getnotes`
        const response = await fetch(url,{
            method: "GET",
            headers: {
                "Content-Type" : "application/json",
                "auth-token" : localStorage.getItem('token')
            }
        })

        // parses the json
        const json = await response.json();
        
        //UPDATE IN UI
        setNotes(json);
    }


    // Add a note
    const addNote = async (title, description, tag) => {
        // API CALL
        const url = `${base_url}/api/notes/addnote`
        const response = await fetch(url,{
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                "auth-token" : localStorage.getItem('token')
            },
            body: JSON.stringify({title, description, tag})
        })
        const note = await response.json();

        // const note =         {
        //     "_id": "96519d97d819d5eb5s2b15bcfada",
        //     "user": "66f5921b529bbce42002ba62",
        //     "title": title,
        //     "description": description,
        //     "tag": tag,
        //     "date": "2024-09-26T17:55:55.408Z",
        //     "__v": 0
        // }
        // setNotes(notes.concat(note));
        
        //UPDATE IN UI
        let newNotes = JSON.parse(JSON.stringify(notes));
        setNotes(newNotes.concat(note));
    }

    // Delete a note
    const deleteNote = async (id) => {

        // API CALL
        const url = `${base_url}/api/notes/deletenote/${id}`
        const response = await fetch(url,{
            method: "DELETE",
            headers: {
                "Content-Type" : "application/json",
                "auth-token" : localStorage.getItem('token')
            }
        })
        const json = await response.json();

        //UPDATE IN UI
        const newNotes = notes.filter((note)=> {return note._id !== id})
        setNotes(newNotes);
    }

    // Edit a note
    const editNote = async (id, title, description, tag) => {
        // API CALL
        const url = `${base_url}/api/notes/updatenote/${id}`
        const response = await fetch(url,{
            method: "PUT",
            headers: {
                "Content-Type" : "application/json",
                "auth-token" : localStorage.getItem('token')
            },
            body: JSON.stringify({title, description, tag})
        })
        const json =  response.json();

        //UPDATE IN UI  
        let newNotes = JSON.parse(JSON.stringify(notes))
        for (let i = 0; i<newNotes.length; i++){
            if (newNotes[i]._id === id) {
                newNotes[i].title = title;
                newNotes[i].description = description;
                newNotes[i].tag = tag;
                break;
            }
        }
        setNotes(newNotes);
    }

    return (
        <NoteContext.Provider value={{
                state, update, notes, getNotes, addNote, deleteNote, editNote, 
                alert, showAlert, mode, toggleMode
            }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;