import React from "react";
import ReactDOM from "react-dom";

function App() {
  return <button onClick={e => console.log(e)}>clique</button>;
}
ReactDOM.render(<App />, document.getElementById("root"));
