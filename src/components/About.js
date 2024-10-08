import React, { useContext, useEffect } from 'react'
import noteContext from '../context/notes/noteContext'

function About() {
  
    const a = useContext(noteContext);

    useEffect(()=>{
        a.update();
        // eslint-disable-next-line
    }, [])
  
    return (
        <div className={`text-${a.mode==='light'?'dark':'light'}`} style={{marginTop:"100px"}}>
            <strong>This is About {a.state.name} from {a.state.class}</strong>
        </div>
     )
}

export default About
