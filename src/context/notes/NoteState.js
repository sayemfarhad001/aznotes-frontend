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

    return (
        <NoteContext.Provider value={{state, update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;