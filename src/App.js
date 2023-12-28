import { isCursorAtEnd } from "@testing-library/user-event/dist/utils";
import "./App.css";
import Navbar from "./Components/Navbar";
import Textforms from "./Components/Textforms";
import React, { useState } from "react";
import Alert from "./Components/Alert";
import Mode from "./Components/Mode";
import About from "./Components/About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 10000);
  };

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.Color = "grey";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.Color = "black";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar title="Text Utiles" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <Mode mode={mode} togglemode={togglemode} />
        <Routes>
          <Route path="/about" element={<About mode={mode} />} />

          <Route
            path="/"
            element={
              <Textforms mode={mode} text="Enter your text to analyze" />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
