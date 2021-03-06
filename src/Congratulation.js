import React from "react";
import PropTypes from "prop-types";

// eu prefiro usar diretamente dentro da declaração da função
// function Congratulation({ name = "Tiago", standing = "1º" }) {

function Congratulation({ name, standing }) {
  return (
    <div>
      <h2>Parabens, {name}!</h2>
      <h3>Você chegou em {standing}</h3>
    </div>
  );
}

Congratulation.defaultProps = {
  name: "Anônimo",
  standing: "2º"
};

Congratulation.propTypes = {
  name: PropTypes.string,
  standing: PropTypes.string
};

export default Congratulation;
