import React from "react";
import styles from "./Square3.module.css";

function Square3({ color }) {
  let shouldBeASquare = color;
  //className precisa sempre que seu valor seja string
  //como estamos colocando duas classes do css, precisam ser
  //unidas por espaço, igual do html.
  return (
    <div
      className={[
        styles.shape,
        shouldBeASquare ? styles.color : styles.color2
      ].join(" ")}
    />
  );
}
export default Square3;
