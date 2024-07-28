import React, { useState } from "react";

function App() {
  const [style, setStyle] = useState("white");
  // const [currentTime, setCurrentTime] = useState(
  //   new Date().toLocaleTimeSting());

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onMouseOver={() => {
          setStyle("black");
        }}
        onMouseOut={() => {
          setStyle("white");
        }}
        style={{ backgroundColor: style }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
