import './App.css';
import './index.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { Routes, Route } from "react-router-dom"
function App() {

  const [mode, setMode] = useState("light");
  const [navswitchtext, setNavSwitchText] = useState("enter dark mode");
  const [alert, setAlert] = useState(null);
  let showAlert = (message, type) => {
    message.toLowerCase();
    message = message[0].toUpperCase() + message.slice(1);

    setAlert({
      message: message,
      type: type
    })
  }
  let toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setNavSwitchText("enter light mode");
      document.body.style.backgroundColor = "rgb(2 46 90)";
      document.body.style.color = "white";
    }
    else if (mode === "dark") {
      setMode("light");
      setNavSwitchText("enter dark mode");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }
  const [btnstyle, setBtnStyle] = useState({ backgroundColor: "#678fff" });
  function btnclrChange() {
    if (Style.backgroundColor === "#8a8ad1") {
      setBtnStyle({ backgroundColor: "rgb(255 183 76)" });
    }
    else if (Style.backgroundColor === "#f7c568") {
      setBtnStyle({ backgroundColor: "rgb(76 98 255)" })
    }
  }

  //navswitchstyle starts here
  const [Style, setStyle] = useState({
    backgroundColor: "white",
    color: "black"
  })
  let allColors = [
    { backgroundColor: "#8a8ad1", color: "white" },
    { backgroundColor: "#f7c568", color: "brown" }]

  function changeMode(e) {
    if (e.target.nextElementSibling.innerText.trim() === "enter orange mode") {
      document.body.style.backgroundColor = "orange";
      document.body.style.color = "brown";
      setStyle(allColors[1]);
    }
    if (e.target.nextElementSibling.innerText.trim() === "enter blue mode") {
      document.body.style.backgroundColor = "blue";
      document.body.style.color = "white";
      setStyle(allColors[0]);
    }

  }
  //navswitchstyle ends here

  let alertNull = () => {
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  return (
    <>
      <Navbar toggleMode={toggleMode} btnclrChange={btnclrChange} Style={Style} changeMode={changeMode} mode={mode} title="TextUtils" navswitchtext={navswitchtext} showAlert={showAlert} alertNull={alertNull} />
      <Alert alert={alert} />
      <Routes>
        <Route exact path="/about" element={<About />}></Route>

        <Route path="/" element={<TextArea heading="Textarea content below" btnstyle={btnstyle} Style={Style} mode={mode} showAlert={showAlert} alertNull={alertNull} />}></Route>

      </Routes>

      <About />
    </>
  );
}

export default App;
