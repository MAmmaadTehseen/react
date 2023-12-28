import React, { useState } from "react";

export default function Textforms(props) {
  const [text, setText] = useState("");
  const [task, setTask] = useState("Orignal");
  const [orignaltext, setOText] = useState("");
  const orignalForm = () => {
    setText(orignaltext);
    setTask("Text is converted to orignal form");
  };
  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    setTask(" Text is converted to uppercase");
  };
  const handleonchange = (event) => {
    setText(event.target.value);
    setOText(event.target.value);
  };
  const handleLoClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    setTask("Text is converted to lowercase");
  };
  const handleSpace = () => {
    let newtext = text.split(" ").join("");
    setText(newtext);
    setTask("Spaces are removed");
  };
  const HandleClearClick = () => {
    let newtext = "";
    setText(newtext);
    setTask("Text is cleared");
    setOText(newtext);
    setTask("");
  };
  const RemoveExtraspace = () => {
    let newtext = text.split(/[ ]+/);
    newtext = newtext.join(" ");
    setText(newtext);
    setTask("Extra spaces are removed");
  };

  return (
    <>
      <div>
        <div className={`mb-3 `}>
          <label
            htmlFor="exampleFormControlTextarea1"
            className={`form-label text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            {props.text}
          </label>

          <textarea
            className={`form-control  rounded border-dark bg-${
              props.mode === "light" ? "light" : "dark"
            } text-${props.mode === "light" ? "dark" : "light"}`}
            onChange={handleonchange}
            value={orignaltext}
            id="exampleFormControlTextarea1"
            rows="2"
          ></textarea>
        </div>
        <button
          className="btn btn-secondary m-2"
          disabled={text.length === 0}
          onClick={HandleClearClick}
        >
          Clear Text
        </button>
        <button
          className="btn btn-primary"
          disabled={text.length === 0}
          onClick={handleUpClick}
        >
          To uppercase
        </button>
        <button
          className="btn btn-primary m-2"
          disabled={text.length === 0}
          onClick={handleLoClick}
        >
          To lower case
        </button>
        <button
          className="btn btn-primary m-2"
          disabled={text.length === 0}
          onClick={handleSpace}
        >
          Remove spaces{" "}
        </button>

        <button
          className="btn btn-primary m-2"
          disabled={text.length === 0}
          onClick={RemoveExtraspace}
        >
          Remove Extra space
        </button>
        <button
          className="btn btn-primary m-2"
          disabled={text.length === 0}
          onClick={orignalForm}
        >
          Get back to orignal form
        </button>
      </div>
      <div
        className={`container text-${
          props.mode === "light" ? "dark" : "light"
        } `}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(/\s+/).filter((a) => a.length !== 0).length} words and{" "}
          {text.split("").filter((element) => element !== " ").length}{" "}
          characters
        </p>
        <p>
          {0.008 * text.split(" ").filter((a) => a.length !== 0).length} Minutes
          read
        </p>

        <h2>{task}</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
