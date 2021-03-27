import React from "react";
import styles from "./Square4.module.css";

function Square4({ toggle }) {
  return (
    <div className={[styles.square, toggle ? styles.show : ""].join(" ")} />
  );
}
export default Square4;
