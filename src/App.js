import { isCursorAtEnd } from "@testing-library/user-event/dist/utils";
import "./App.css";
import Navbar from "./Components/Navbar";
import Textforms from "./Components/Textforms";
import React, { useState } from "react";
import Alert from "./Components/Alert";
import Mode from "./Components/Mode";
import About from "./Components/About";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
        <Switch>
          <Route path="/about">
            <About mode={mode} />
          </Route>

          <Route path="/">
            <div className="container">
              <Textforms mode={mode} text="Enter your text to analyze" />
            </div>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
