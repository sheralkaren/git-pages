import React from "react";
import ReactDOM from "react-dom";

let customStyle = {
  color: "red",
  fontSize: "2em",
  rotate: "180deg",
  float: "left",
};

function onClick() {
  customStyle.rotate = "90deg";
  window.reload();
}

// document.getElementsByClassName("demo").style.color = "red";

ReactDOM.render(
  <h1 className="demo" style={customStyle} onHover={onClick}>
    Hello World!
  </h1>,
  document.getElementById("root")
);
