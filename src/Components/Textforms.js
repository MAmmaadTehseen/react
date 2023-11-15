import React ,{useState} from 'react'

export default function Textforms(props) {
    const[text,setText]=useState("Enter your text here");
    const handleUpClick=()=>{
        let newtext=text.toUpperCase();
        setText(newtext);
    }   
    const handleonchange=(event)=>{
        setText(event.target.value);
    }
    const handleLoClick=()=>{
        let newtext=text.toLowerCase();
        setText(newtext);
    }
    const handleSpace=()=>{
        let newtext=text.split(" ").join("");
        setText(newtext);
    }
    const HandleClearClick=()=>{
        let newtext="";
        setText(newtext);
    }
    const RemoveExtraspace=()=>{
        let newtext=text.split(/[ ]+/);
        setText(newtext.join(" "));
    }


  return (
    <>
    <div >
            
        <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.text}</label>
        <textarea className="form-control" onChange={handleonchange} value={text} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>To uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>To lower case</button>
        <button className="btn btn-primary mx-2" onClick={handleSpace}>Remove spaces </button>
        <button className="btn btn-primary mx-2" onClick={HandleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={RemoveExtraspace}>Remove Extra space</button>
    </div>
    <div className="container">
      <h2>
        Your text summary
      </h2>
      <p>
        {text.split(" ").length} words and {text.length} characters
      </p>
      <p>
        {0.008*text.split(" ").length} Minutes read
      </p>
      <h2>
        Preview
      </h2>
      <p>
        {text}
      </p>
    </div>

    </>
  )
}
