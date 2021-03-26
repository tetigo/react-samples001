import React from "react";
import ReactDOM from "react-dom";
import Welcome from "./Welcome";

function App() {
  return (
    <div>
      <Welcome gender="male" name="Tiago" />
      <Welcome gender="female" name="Marta" />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
