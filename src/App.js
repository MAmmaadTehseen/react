
import { isCursorAtEnd } from '@testing-library/user-event/dist/utils';
import './App.css';
import Navbar from './Components/Navbar';
import Textforms from './Components/Textforms';
import React,{useState} from 'react';
import Alert from './Components/Alert';
import Mode from './Components/Mode';

function App() {
  const [mode,setmode]=useState("light");
  const  [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    },2500);
  }

  const togglemode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='black';
      // document.body.style.Color='white';
      showAlert("Dark mode has been enabled","success");


    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      document.body.style.Color='black';
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
<>
<Navbar title="Text Utiles" mode={mode} togglemode ={togglemode}/>
<Alert  alert={alert}/>
<Mode mode={mode} togglemode ={togglemode}/>
<div className="container">
<Textforms mode={mode} text="Enter your text to analyze"/>

</div>
</>
  );
}

export default App;
