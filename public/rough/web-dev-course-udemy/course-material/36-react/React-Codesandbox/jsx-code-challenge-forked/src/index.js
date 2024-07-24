//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div class="d-flex-row justify-content-center align-items-center text-center">
    <h1> My favourite food </h1>
    <ul>
      <li> Hyderabadi Biriyani </li>
      <li> Raita </li>
      <li> Protein salads </li>
    </ul>
  </div>,
  document.getElementById("root")
);
