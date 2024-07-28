import React from "react";
import FormInput from "./FormInput";

function Login(props) {
  return (
    <div>
      <FormInput type="text" placeholder="Username" />
      <FormInput type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </div>
  );
}

export default Login;
