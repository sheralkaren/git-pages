import React from "react";
import Login from "./Login";

let isLoggedIn = false;
const currentTime = new Date(2032, 4, 1, 18).getHours();

function ConditionalRendering() {
  if (isLoggedIn === true) {
    return <h1>Hello</h1>;
  } else {
    return <Login />;
  }
}

function App() {
  return (
    // Both ways of calling are fine
    <div className="container">
      <ConditionalRendering />
      {ConditionalRendering()}
      {isLoggedIn ? <h1> Hello1 </h1> : <Login />}
      {currentTime > 12 && <h1>I love you!</h1>}
    </div>
  );
}

export default App;
