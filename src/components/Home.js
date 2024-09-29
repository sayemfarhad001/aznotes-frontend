import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';

import Notes from './Notes'

function Home() {

    const context = useContext(noteContext);
    const {mode} = context;

    return (
        <div className={`container my-3 text-${mode === 'light' ? 'dark' : 'light'}`} >
            <Notes/>
        </div>
    )
}

export default Home;
