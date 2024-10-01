import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import noteContext from '../context/notes/noteContext';
import AddNote from './AddNote';
import NoteItem from './NoteItem';

const Notes = () => {
    let navigate = useNavigate();

    const context = useContext(noteContext);
    const {showAlert, notes, getNotes, editNote} = context;


    useEffect(()=>{
        if (localStorage.getItem('token')){
            getNotes();
        } else {
            navigate('/');
        }
        // eslint-disable-next-line
    },[])

    const updateNote = (currentNote) => {
        refEdit.current.click();
        setNote({id:currentNote._id, etitle:currentNote.title, edescription:currentNote.description, etag:currentNote.tag })
    }

    // MODAL CODE START
    const refEdit = useRef(null);
    const refClose = useRef(null);

    const [note, setNote] = useState({id: "", etitle:"", edescription:"", etag:"" })

    const handleClick = (e) => {
        // e.preventDefault();      //Not needed as it is outside the <form>
        editNote(note.id,note.etitle, note.edescription, note.etag);
        refClose.current.click();
        showAlert('Updated successfully!', 'success');
    }

    const onChange = (e) => {
        if(e.target.name==="etag"){
            e.target.value = toggleCheckbox(e.target.value);
        }
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
    // MODAL CODE END

    return (
        <>
            <AddNote/>
            {/* MODAL START*/}
            <button type="button" ref={refEdit} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Edit Note
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="my-3">
                                <div className="mb-3">
                                    <label htmlFor="etitle" className="form-label">Title</label>
                                    <input type="text" className="form-control" value={note.etitle}
                                        onChange={onChange} name="etitle" id="etitle"aria-describedby="emailHelp" 
                                        required minLength={5}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edescription" className="form-label">Description</label>
                                    <input type="text" className="form-control" value={note.edescription}
                                        onChange={onChange} name="edescription" id="edescription" 
                                        required minLength={5}/>
                                </div>
                                {/* TAG CHECKBOX START */}
                                <div className="form-check mb-3">
                                    <label className="form-check-label" htmlFor="etag">Important</label>
                                    <input className="form-check-input" type="checkbox"
                                        onChange={onChange} name="etag" id="etag"
                                        checked={note.etag==="important" ? true : false} />
                                </div>
                                {/* TAG CHECKBOX END */}
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={note.etitle.length<5 || note.edescription.length<5} type="button" 
                                onClick={handleClick} className="btn btn-primary">Submit Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* MODAL END*/}

            <div className="row my-4">
                <h2>Your notes:</h2>
                <div className="container fw-bold">
                    {notes.length===0 ? "No notes to display!" : `Total notes : ${notes.length}`}
                </div>
                {notes.map((note) => {
                    return <NoteItem key={note._id} note={note} updateNote={updateNote}/>
                })}
            </div>
        </>

  )
}

export default Notes
