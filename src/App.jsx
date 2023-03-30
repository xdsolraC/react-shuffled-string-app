import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [randomString, setRandomString] = useState("");

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function shuffleString(str) {
    return str.split("").sort(() => Math.random() - 0.5).join("").toLowerCase();
  }

  function handleButtonClick() {
    setRandomString(shuffleString(inputValue));
  }

  return (
    <div>
      <h1>Word letters shuffle app</h1>
      <div>
        <input type="text" placeholder="Enter a word"  onChange={handleInputChange} value={inputValue}/>
        <button onClick={handleButtonClick}>Shuffle</button>
      </div>
      <p className="result">{randomString}</p>
      <footer>by <a href="https://github.com/xdsolraC" target="_blank">xdsolraC</a></footer>
    </div>
  );
}

export default App;
