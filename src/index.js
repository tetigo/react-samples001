import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom";
import Welcome from "./Welcome";
import { Button } from "./Button";
import Button2 from "./Button2";
import Button3 from "./Button3";
import Button4 from "./Button4";
import Square from "./Square/Square";
import Square2 from "./Square2/Square2";
import Square3 from "./Square3/Square3";
import Square4 from "./Square4/Square4";
import Counter from "./Counter";
import Order from "./Order";
import Icon from "./Icon";
import Congratulation from "./Congratulation";

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

  const [state4, setState4] = useState(false);
  // o setState4 já recebe por parametro default o state atual
  // que vamos chamar de prev para tratar como anterior
  // isso para não mexer diretamente com state4 porque state4 é
  // assincrono e não temos garantia de que está usando o ultimo valor
  // de state4 se chamarmos varias vezes rapidamente
  // então encapsulamos em anonymous function dentro de setState4
  // com outro nome, no caso prev
  // RESUMO: por state4 ser assincrono e seu valo previo estar sendo
  // usado para gerar novo valor, não temos garantia de estar sendo
  // chamado corretamente, então encapsulamos em function
  //
  // useCallback pra manipular empacotar função handleClick4, assim
  // ela não é renderizada todas as vezes que o component App for
  // renderizado. Somente quando suas dependencias forem atualizadas
  // ele é chamado novamente
  const handleClick4 = useCallback(() => {
    // setState4(!state4);
    setState4(prev => {
      return !prev;
    });
  }, []);

  const [status, setStatus] = useState(false);
  const [square3, setSquare3] = useState(false);
  // passando component como props em Button2 precisa ser tag html
  // passando component como children em Button3
  return (
    <div>
      <Button4 name="mostra square" clicked={handleClick4} />
      <Square4 toggle={state4} />
      <Congratulation />
      <Congratulation name="Tiago" standing="1º" />
      <Button3>
        Teste2
        <Icon />
      </Button3>

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
