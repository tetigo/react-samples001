import React from "react";

function Welcome(props) {
  switch (props.gender) {
    case "male":
      return <h2>Bem vindo {props.name}</h2>;
    case "female":
      return <h2> Bem vinda {props.name}</h2>;
    default:
      return <h2>Bem vindo</h2>;
  }
}
export default Welcome;
