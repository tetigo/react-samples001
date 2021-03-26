import React from "react";

function Welcome({ gender, name }) {
  switch (gender) {
    case "male":
      return <h2>Bem vindo {name}</h2>;
    case "female":
      return <h2> Bem vinda {name}</h2>;
    default:
      return <h2>Bem vindo</h2>;
  }
}
export default Welcome;
