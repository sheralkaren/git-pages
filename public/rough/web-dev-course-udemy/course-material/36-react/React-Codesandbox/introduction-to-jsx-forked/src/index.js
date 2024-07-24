var React = require("react");
var ReactDOM = require("react-dom");

ReactDOM.render(
  <h1> Starting react project </h1>,
  document.getElementById("root")
);

var p = document.createElement("p");
p.innerText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellendus harum provident placeat, quos nulla rerum ea sit, illum, officiis laudantium delectus ullam? Quisquam beatae in ut aliquid, iste enim.";
document.getElementById("root").appendChild(p);
