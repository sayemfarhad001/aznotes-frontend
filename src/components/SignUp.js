import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import noteContext from '../context/notes/noteContext';

const SignUp = () => {

    // CONTEXT FOR ALERT ONLY
    const context = useContext(noteContext);
    const { showAlert } = context;
    // CONTEXT FOR ALERT ONLY

    let navigate = useNavigate();
    const [credentials, setCredentials] = useState({name:"", email: "", password: "", cpassword: ""})

    const onChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        // API CALL
        const {name, email, password} = credentials;
        const base_url = process.env.REACT_APP_BASE_URL; 
        const url = `${base_url}/api/auth/createuser`
        const response = await fetch(url,{
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({name: name, email: email, password: password}) 
        })
        const json = await response.json();
        console.log(json)
        // NO NEED TO CHECK WRONG CREDS HERE
        if(json.success){
            //Save token & redirect
            localStorage.setItem('token', json.authToken);
            showAlert('Account created successfully!', 'success');
            navigate('/');
        } else {
            showAlert('Invalid Credentials!', 'danger');
        }
    }

    return (
        <div className="container my-3">
                        <h2>Create an account to use azNotes</h2>
            <form onSubmit={handleSubmit}>
                <div className="my-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="name" className="form-control" id="name" name="name"
                        onChange={onChange} value={credentials.name} />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email"
                        onChange={onChange} value={credentials.email} aria-describedby="emailHelp" />
                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password"
                        onChange={onChange} value={credentials.password} 
                        required minLength={5}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="cpassword" name="cpassword"
                        onChange={onChange} value={credentials.cpassword} 
                        required minLength={5}/>
                </div>

                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp
