import React, { useState } from "react";

function App() {
  const [localTime, setLocalTime] = useState(new Date().toLocaleTimeString());

  setInterval(() => {
    setLocalTime(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <div className="container">
      <h1>{localTime}</h1>
      <button
        onClick={() => {
          setLocalTime(new Date().toLocaleTimeString());
        }}
      >
        Get Time
      </button>
    </div>
  );
}

export default App;
