import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function decreaseCount() {
    setCount(count - 1);
  }

  function increaseCount() {
    setCount(count + 1);
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decreaseCount}>-</button>
      <button onClick={increaseCount}>+</button>
    </div>
  );
}

export default App;
