
import './App.css';
 import About from './components/About';
import Navbar from './components/Navbar';
 import TextForm from './components/TextForm';
 import React, {useState} from 'react';
import Alert from './components/Alert';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

 

function App() {
  const [mode,setmode] =  useState('light');
  const [alert,setAlert] =  useState(null);
  
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const togglemode=()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor="#101e55";
      showAlert("Dark mode has been enable","success");
      document.title ='TextUtils - Dark Mode'
    }
    else{
      setmode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enable","success");
      document.title ='TextUtils - Light Mode'
    }
  }
  
  return (
   <>
 <BrowserRouter>
      <Navbar title="TextUtils" mode ={mode} togglemode={togglemode} />
      <Alert alert={alert}/>
      <div className="container my-3">
      
        <Routes>
          <Route path="/" element={<TextForm showAlert={showAlert} heading = "Enter your text to analyse" mode ={mode} />} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
 