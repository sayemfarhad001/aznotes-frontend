import React,{ useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types'



function Navbar(props) {
    let location = useLocation();

    useEffect(()=>{      
    },[location])
    
    return (
    <div>
      <nav className={`navbar fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`}>
            <div className="container-fluid fs-4">
                <Link className="navbar-brand" to="/">
                    <div className='d-flex'>
                        <img className="border border-dark rounded mx-2 bg-light" src="/logo.svg" alt="NewsRaptor" width="50" height="50"/>
                        <h1><strong>azNotes</strong></h1>
                    </div>
                </Link>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span   span="true" className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><Link className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">Home</Link></li>
                        <li className="nav-item"><Link className={`nav-link ${location.pathname==="/about"?"active":""}`} to="/about">About Us</Link></li>
                    </ul>
                </div>

                <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} mx-3`}>
                    <input className="form-check-input" onClick={()=>{props.toggleMode(null)}} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==='light'?"Enable Dark Mode":"Enable Light Mode"}</label>
                </div>
            </div>
        </nav>
    </div>
  )
}

Navbar.propTypes = {
    mode: PropTypes.string,
}

export default Navbar
