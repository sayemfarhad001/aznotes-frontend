import './App.css';

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NoteState from './context/notes/NoteState';
// import noteContext from './context/notes/noteContext';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  // const context = useContext(noteContext);
  // const { alert } = context; 


  // const [mode, setMode] = useState('light');
  
  // const toggleMode = ()=>{
  //   if(mode === 'light'){
  //     setMode('dark')
  //     document.body.style.backgroundColor = '#042743';
  //     showAlert('Dark mode activated!', 'success');
  //   } else {
  //     setMode('light')
  //     document.body.style.backgroundColor = 'white';
  //     showAlert('Dark mode deactivated!', 'success');
  //   }
  // }



  return (
    <div className="App">
      <NoteState>
        <Router>
          <Navbar/>
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home key="home" category="home"/>}/>
              <Route path="/about" element={<About key="about" category="about"/>}/>
              <Route path="/login" element={<Login key="login" category="login"/>}/>
              <Route path="/signup" element={<SignUp key="signup" category="signup"/>}/>
            </Routes> 
          </div>
        </Router>
      </NoteState>
    </div>
  );
}

export default App;
