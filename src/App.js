
import { isCursorAtEnd } from '@testing-library/user-event/dist/utils';
import './App.css';
import Navbar from './Components/Navbar';
import Textforms from './Components/Textforms';
import React,{useState} from 'react';
import Alert from './Components/Alert';

function App() {
  const [mode,setmode]=useState('light');
  const  [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const togglemode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='grey';
      // document.body.style.Color='white';
      showAlert("Dark mode has been enabled","success");


    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      // document.body.style.Color='black';
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
<>
<Navbar title="Text Utiles" mode={mode} togglemode={togglemode}/>
<Alert  alert={alert}/>
<div className="container">
<Textforms text="Enter your text to analyze"        />

</div>
</>

  );
}

export default App;
