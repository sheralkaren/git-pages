import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <div>
      <img className="food-img" src="https://picsum.photos/241" alt="" />
      <img className="food-img" src="https://picsum.photos/242" alt="" />
      <img className="food-img" src="https://picsum.photos/243" alt="" />
      <img className="food-img" src="https://picsum.photos/241" alt="" />
      <img className="food-img" src="https://picsum.photos/242" alt="" />
      <img className="food-img" src="https://picsum.photos/243" alt="" />
    </div>
  </div>,
  document.getElementById("root")
);
