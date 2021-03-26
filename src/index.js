import React from "react";
import ReactDOM from "react-dom";
import Welcome from "./Welcome";

function App() {
  return (
    <div>
      <Welcome gender="male" name="Tiago" />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
