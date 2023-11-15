
import { isCursorAtEnd } from '@testing-library/user-event/dist/utils';
import './App.css';
import Navbar from './Components/Navbar';
import Textforms from './Components/Textforms';
import React,{useState} from 'react';

function App() {
  const [mode,setmode]=useState('dark');
  const togglemode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='grey';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
<>
<Navbar title="Text Utiles" mode={mode} togglemode={togglemode}/>
<div className="container">
<Textforms text="Enter your text to analyze"/>

</div>
</>

  );
}

export default App;
