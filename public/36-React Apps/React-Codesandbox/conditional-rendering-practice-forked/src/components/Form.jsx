import React from "react";
import Login from "./Login";
import Register from "./Register";

function Form(props) {
  return (
    <div>
      <form className="form">
        {props.userIsRegistered ? <Login /> : <Register />}
      </form>
    </div>
  );
}

export default Form;
