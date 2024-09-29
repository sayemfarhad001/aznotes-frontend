import React from 'react'

const NoteItem = (props) => {
    const {note} = props

  return (
    <div className="col-md-3 my-3">
        <div className="card">
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <h5 className="card-title">{note.title}</h5>
                    <div>
                        <i className={`fa-${note.tag==="important"?"solid":"regular"} fa-star`}></i>
                        <i className="fa fa-regular fa-trash mx-2"></i>
                        <i className="fa-regular fa-pen-to-square mx-2"></i>
                    </div>
                </div>
                <p className="card-text">{note.description}</p>
            </div>
        </div>
    </div>
  )
}

export default NoteItem
