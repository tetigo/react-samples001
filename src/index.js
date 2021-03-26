import React, { useState } from "react";
import ReactDOM from "react-dom";
import Welcome from "./Welcome";

function App() {
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
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
