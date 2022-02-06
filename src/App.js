import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar.js"
import TextForm from "./components/TextForm.js";
import Alert from "./components/Alert";
import React, {useState} from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#353b48";
      showAlert("Dark mode enabled", "success")
    } else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success")
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggle={toggleMode}/>
      
      <div className="container py-4" style={{color : mode === 'light'?'black':'white'}}>
      <Alert alert={alert}/>
        {/* <Routes> */}
          {/* <Route exact path="/" element={<TextForm heading="Enter text to analyse" mode={mode} showAlert={showAlert}/>} /> */}
          <TextForm heading="Enter text to analyse" mode={mode} showAlert={showAlert}/>
          {/* </Route> */}

          {/* <Route wxact path="about" element={<About/>} /> */}
          
          {/* </Route> */}
        {/* </Routes> */}
      
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
