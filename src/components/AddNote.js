import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext';

const AddNote = () => {

    const context = useContext(noteContext);
    const {addNote} = context;

    const [note, setNote] = useState({ title:"", description:"", tag:"regular" })

    // FORM CODE START
    const handeSubmit = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
    }

    const onChange = (e) => {
        if(e.target.name==="tag"){
            e.target.value = toggleCheckbox(e.target.value);
        }
        console.log(e.target.value)
        setNote({...note, [e.target.name]: e.target.value})
    }

    const toggleCheckbox = (value) => {
        if (value==="important") {
            value =  "regular";
        } else {
            value = "important"
        }
        return value
    }
    // FORM CODE END

    return (
        <div style={{ marginTop: "10px" }}>

            <h2>Add a Note:</h2>

            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" 
                        onChange={onChange} name="title" id="title" 
                        aria-describedby="emailHelp" required minLength={5}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" 
                        onChange={onChange} name="description" id="description" required minLength={5}/>
                </div>
                <div className="form-check mb-3">
                    <label className="form-check-label" htmlFor="tag">Important</label>
                    <input className="form-check-input" type="checkbox"
                        onChange={onChange} name="tag" id="tag"/>
                </div>
                {/* <div className="form-check mb-3">
                    <label className="form-check-label" htmlFor="tagOff">Not Important</label>
                    <input className="form-check-input" type="radio" value="regular"
                        onChange={onChange} name="tag" id="tagOff"/>
                </div> */}
                <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handeSubmit}>Add note</button>
            </form>


        </div>
    )
}

export default AddNote
