import React from "react";
import "./Square.css";

function Square({ color }) {
  return (
    <div>
      <div className="square" />
      <br />
      <div
        style={{
          backgroundColor: color,
          width: "50px",
          height: "50px"
        }}
      />
    </div>
  );
}
export default Square;
