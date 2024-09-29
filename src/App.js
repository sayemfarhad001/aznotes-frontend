import './App.css';

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NoteState from './context/notes/NoteState';
// import noteContext from './context/notes/noteContext';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';

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
              {/* <Route path="/business" element={<News setProgress={setProgress} key="business" pageSize={pageSize} apiKey={apiKey} category="business" mode={mode}/>}/>
              <Route path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={pageSize} apiKey={apiKey} category="entertainment" mode={mode}/>}/>
              <Route path="/health" element={<News setProgress={setProgress} key="health" pageSize={pageSize} apiKey={apiKey} category="health" mode={mode}/>}/>
              <Route path="/science" element={<News setProgress={setProgress} key="science" pageSize={pageSize} apiKey={apiKey} category="science" mode={mode}/>}/>
              <Route path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={pageSize} apiKey={apiKey} category="sports" mode={mode}/>}/>
              <Route path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={pageSize} apiKey={apiKey} category="technology" mode={mode}/>}/>
              <Route path="/about" element={<About setProgress={setProgress} key="about" category="about" mode={mode}/>}/>  */}
            </Routes> 
          </div>
        </Router>
      </NoteState>
    </div>
  );
}

export default App;
