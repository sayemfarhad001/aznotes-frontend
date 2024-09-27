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

    // const [mode, setMode] = useState('light');
  
    // const toggleMode = ()=>{
    //   if(mode === 'light'){
    //     setMode('dark')
    //     document.body.style.backgroundColor = '#042743';
    //   } else {
    //     setMode('light')
    //     document.body.style.backgroundColor = 'white';
    //   }
    // }

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
            "_id": "96519d97d819d5eb52b15bcf",
            "user": "66f5921b529bbce42002ba62",
            "title": "My Title 2",
            "description": "My Desc 2",
            "tag": "My Tag 2",
            "date": "2024-09-26T17:55:55.408Z",
            "__v": 0
        },
        {
            "_id": "96519d97d819d5eb52b15bcf",
            "user": "66f5921b529bbce42002ba62",
            "title": "My Title 2",
            "description": "My Desc 2",
            "tag": "My Tag 2",
            "date": "2024-09-26T17:55:55.408Z",
            "__v": 0
        },
        {
            "_id": "96519d97d819d5eb52b15bcf",
            "user": "66f5921b529bbce42002ba62",
            "title": "My Title 2",
            "description": "My Desc 2",
            "tag": "My Tag 2",
            "date": "2024-09-26T17:55:55.408Z",
            "__v": 0
        },
        {
            "_id": "96519d97d819d5eb52b15bcf",
            "user": "66f5921b529bbce42002ba62",
            "title": "My Title 2",
            "description": "My Desc 2",
            "tag": "My Tag 2",
            "date": "2024-09-26T17:55:55.408Z",
            "__v": 0
        },
        {
            "_id": "96519d97d819d5eb52b15bcf",
            "user": "66f5921b529bbce42002ba62",
            "title": "My Title 2",
            "description": "My Desc 2",
            "tag": "My Tag 2",
            "date": "2024-09-26T17:55:55.408Z",
            "__v": 0
        },
        {
            "_id": "96519d97d819d5eb52b15bcf",
            "user": "66f5921b529bbce42002ba62",
            "title": "My Title 2",
            "description": "My Desc 2",
            "tag": "My Tag 2",
            "date": "2024-09-26T17:55:55.408Z",
            "__v": 0
        }
      ]
    const [notes, setNotes] = useState(sampleNotes);

    return (
        <NoteContext.Provider value={{
                state, update, notes, setNotes, 
                // mode, toggleMode
            }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;