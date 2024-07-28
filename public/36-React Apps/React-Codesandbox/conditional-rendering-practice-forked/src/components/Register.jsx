import React from "react";
import FormInput from "./FormInput";

function Register(props) {
  return (
    <div>
      <FormInput type="text" placeholder="Username" />
      <FormInput type="password" placeholder="Password" />
      <FormInput type="password" placeholder="Confirm Password" />
      <button type="submit">Register</button>
    </div>
  );
}

export default Register;
