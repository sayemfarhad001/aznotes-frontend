import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';

const NoteItem = (props) => {
    const {note, updateNote} = props

    const context = useContext(noteContext);
    const { showAlert, deleteNote } = context;

  return (
    <div className="col-md-3 my-3">
        <div className="card">
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <h5 className="card-title">{note.title}</h5>
                    <div>
                        <i className={`fa-${note.tag==="important"?"solid":"regular"} fa-star`}></i>
                        <i className="fa fa-regular fa-trash mx-2" onClick={()=>{deleteNote(note._id); showAlert('Deleted successfully!', 'success');}}></i>
                        <i className="fa-regular fa-pen-to-square mx-2" onClick={()=>{updateNote(note)}}></i>
                    </div>
                </div>
                <p className="card-text">{note.description}</p>
            </div>
        </div>
    </div>
  )
}

export default NoteItem
