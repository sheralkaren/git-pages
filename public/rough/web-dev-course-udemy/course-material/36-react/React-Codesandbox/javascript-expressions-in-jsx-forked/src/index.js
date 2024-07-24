import React from "react";
import ReactDOM from "react-dom";

var luckyNumber = Math.floor(Math.random() * 10);

const name = ReactDOM.render(
  <div>
    <h1>Hello User!</h1>
    <p>Your lucky number is {luckyNumber}</p>
  </div>,
  document.getElementById("root")
);
