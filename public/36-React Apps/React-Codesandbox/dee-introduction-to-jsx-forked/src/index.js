import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>Hello Dee</h1>
    <p> -- Have you ever found a skill -- </p>
  </div>,
  document.getElementById("root")
);

// plain javascript method
var headerBlock = document.createElement("h1");
headerBlock.innerHTML = "Somewhere I will travel by becoming an engineer again";
document.getElementById("root").appendChild(headerBlock);
