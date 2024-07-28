import React from "react";
import FormInput from "./FormInput";

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form className="form">
        <FormInput type="text" placeholder="Username" />
        <FormInput type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
