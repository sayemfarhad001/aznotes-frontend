import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import noteContext from '../context/notes/noteContext';

const Login = () => {
    // CONTEXT FOR ALERT ONLY
    const context = useContext(noteContext);
    const { showAlert } = context;
    // CONTEXT FOR ALERT ONLY

    let navigate = useNavigate();
    const [credentials, setCredentials] = useState({email: "", password: ""})

    const onChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        // API CALL
        const base_url = process.env.REACT_APP_BASE_URL; 
        const url = `${base_url}/api/auth/login`
        const response = await fetch(url,{
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password}) 
        })
        const json = await response.json();
        if(json.success){
            //Save token, show Alert & redirect
            localStorage.setItem('token', json.authToken);
            showAlert('Logged in successfully!', 'success');
            navigate('/');
        } else {
            showAlert('Invalid Credentials!', 'danger');
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" 
                        onChange={onChange} value={credentials.email} aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" 
                        onChange={onChange} value={credentials.password}/>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login
