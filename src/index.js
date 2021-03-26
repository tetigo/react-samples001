import React, { useState } from "react";
import ReactDOM from "react-dom";
import Welcome from "./Welcome";
import { Button } from "./Button";

function App() {
  const handleClick = e => {
    console.log(e.target.innerHTML);
  };
  const [status, setStatus] = useState(false);
  return (
    <div>
      <p>{status ? "sim" : "não"}</p>
      <button
        onClick={() => {
          console.log(status);
          setStatus(!status);
        }}
      >
        clique
      </button>
      <Button clicked={e => handleClick(e)} />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
