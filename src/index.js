import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom";
import Welcome from "./Welcome";
import { Button } from "./Button";
import Square from "./Square/Square";

function App() {
  let msg = "mensagem";
  const handleClick = useCallback(txt => {
    window.alert(txt);
  }, []);
  msg = "outra msg2";
  const [status, setStatus] = useState(false);
  return (
    <div>
      <Square color="yellow" />
      <p>{status ? "sim" : "não"}</p>
      <button
        onClick={() => {
          console.log(status);
          setStatus(!status);
        }}
      >
        clique
      </button>
      <Button clicked={e => handleClick(msg)} />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
