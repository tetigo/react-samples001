import React from "react";
import "./Square.css";

function Square({ color }) {
  const styled = {
    backgroundColor: color,
    width: "50px",
    height: "50px"
  };
  return (
    <div>
      <div className="square" />
      <br />
      <div style={styled} />
    </div>
  );
}
export default Square;
