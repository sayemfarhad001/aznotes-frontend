import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext';

const AddNote = () => {

    const context = useContext(noteContext);
    const {addNote} = context;

    const [note, setNote] = useState({ title:"", description:"", tag:"" })

    const handeSubmit = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
    }

    const onChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value})
    }

    return (
        <div style={{ marginTop: "10px" }}>

            <h2>Add a Note:</h2>

            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" 
                        onChange={onChange} name="title" id="title" 
                        aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" 
                        onChange={onChange} name="description" id="description" />
                </div>
                <div className="form-check mb-3">
                    <label className="form-check-label" htmlFor="tagOn">Important</label>
                    <input className="form-check-input" type="radio" value="important"
                        onChange={onChange} name="tag" id="tagOn"/>
                </div>
                <div className="form-check mb-3">
                    <label className="form-check-label" htmlFor="tagOff">Not Important</label>
                    <input className="form-check-input" type="radio" value=""
                        onChange={onChange} name="tag" id="tagOff"/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handeSubmit}>Add note</button>
            </form>


        </div>
    )
}

export default AddNote
