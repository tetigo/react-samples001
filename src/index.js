import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom";
import Welcome from "./Welcome";
import { Button } from "./Button";

function App() {
  let msg = "mensagem";
  const handleClick = useCallback(() => {
    window.alert(msg);
  }, [msg]);
  msg = "outra msg";
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
