import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../context/notes/noteContext';
import AddNote from './AddNote';
import NoteItem from './NoteItem';

const Notes = () => {

    const context = useContext(noteContext);
    const {notes, getNotes} = context;

    useEffect(()=>{
        getNotes();
        // eslint-disable-next-line
    },[])

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({etitle:currentNote.title, edescription:currentNote.description, etag:currentNote.tag })
    }

    
    // MODAL CODE START
    const ref = useRef(null);

    const [note, setNote] = useState({ etitle:"", edescription:"", etag:"" })

    const handleClick = (e) => {
        e.preventDefault();
        console.log("Updating the note...", note)
        // addNote(note.title, note.description, note.tag);
    }

    const onChange = (e) => {
        if (e.target.name==="etag"){


        }
        setNote({...note, [e.target.name]: e.target.value})


    }
    // MODAL CODE END

    return (
        <>
            <AddNote/>
            {/* MODAL START*/}
            <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
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
                                        onChange={onChange} name="etitle" id="etitle"aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edescription" className="form-label">Description</label>
                                    <input type="text" className="form-control" value={note.edescription}
                                        onChange={onChange} name="edescription" id="edescription" />
                                </div>
                                {/* TAG RADIO BUTTON START */}
                                {/* <div className="mb-3">
                                    <label htmlFor="etag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" value={note.tag}
                                        onChange={onChange} name="etag" id="etag" />
                                </div> */}

                                <div className="form-check mb-3">
                                    <label className="form-check-label" htmlFor="etagOn">Important</label>
                                    <input className="form-check-input" type="radio" 
                                        value="important"
                                        onChange={onChange} name="etag" id="etagOn"
                                        checked={note.etag==="important" ? true : false} 
                                        />
                                </div>
                                <div className="form-check mb-3">
                                    <label className="form-check-label" htmlFor="etagOff">Not Important</label>
                                    <input className="form-check-input" type="radio" 
                                        value="regular"
                                        onChange={onChange} name="etag" id="etagOff"
                                        checked={note.etag==="regular" ? true : false} 
                                        />
                                </div>
                                {/* TAG RADIO BUTTON END */}

                                {/* <button type="submit" className="btn btn-primary" onClick={handeSubmit}>Add note</button> */}
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" onClick={handleClick} className="btn btn-primary">Submit Changes</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* MODAL END*/}

            <div className="row my-4">
                <h2>Your notes:</h2>
                {notes.map((note) => {
                    return <NoteItem key={note._id} note={note} updateNote={updateNote}/>
                })}
            </div>
        </>

  )
}

export default Notes
