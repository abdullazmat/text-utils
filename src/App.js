import React, { useState } from 'react';
import Navbar from "./Components/Navbar";
import FormArea from './Components/FormArea';
import Alert from './Components/Alert';
import About from './Components/About';

function App(){

// Toggle Function UseStates
   const [mode, setMode] = useState('light')
   
   const togfunc = () => {
    
    if (mode === 'dark'){
        setMode('light')
        showalert(" Light Mode enabled")
        
    }
    else{
        setMode('dark')
        showalert(" Dark Mode enabled")
    }
   }

// Alert Use States
const [alert, setAlert] = useState(null)

const showalert = (msg) => {
       setAlert(msg)
       setTimeout(() => {
        setAlert(null) 
    }, 1000);
}

    return (
        <div>
        <Navbar mode = {mode} toggle = {togfunc} />
        <Alert message = {alert} />
        <div className="container mt-5">
            <FormArea heading = "Enter the text to analyze"  state ={mode} showalert = {showalert}  />
        </div>
        <About />
        </div>
    );
}

export default App;
