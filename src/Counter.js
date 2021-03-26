import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const handleAdd = () => {
    setCounter(counter + 1);
  };
  const handleSub = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSub}>-</button>
    </div>
  );
}
export default Counter;
