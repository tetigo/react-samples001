import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom";
import Welcome from "./Welcome";
import { Button } from "./Button";
import Button2 from "./Button2";
import Square from "./Square/Square";
import Square2 from "./Square2/Square2";
import Square3 from "./Square3/Square3";
import Counter from "./Counter";
import Order from "./Order";
import Icon from "./Icon";

function App() {
  const order = {
    food: "pizza",
    flavor: "portuguesa"
  };
  let msg = "mensagem";
  const handleClick = useCallback(txt => {
    window.alert(txt);
  }, []);
  msg = "outra msg2";
  const [status, setStatus] = useState(false);
  const [square3, setSquare3] = useState(false);
  // passando component como props em Button2
  return (
    <div>
      <Button2 icon={<Icon />} title="Teste" />
      <Order {...order} />
      <Counter start={10} />
      <Square3 color={square3} />
      <Square2 />
      <Square color="yellow" />
      <p>{status ? "sim" : "não"}</p>
      <button
        onClick={() => {
          console.log(status);
          setStatus(!status);
          setSquare3(!square3);
        }}
      >
        clique
      </button>
      <Button clicked={e => handleClick(msg)} />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
