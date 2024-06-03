import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(getAuth, userName, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })

      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="sign-up">
      <form onSubmit={signUp}>
        <h1>Create Account</h1>
        <input
          type="text"
          placeholder="Enter Your User name"
          value={userName}
        ></input>
        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
        ></input>
        <input
          type="password"
          placeholder="Enter Your Password"
          value={password}
        ></input>
        <button type="submit">Sign Up</button>
        Have an account<a>Log in</a>
      </form>
    </div>
  );
};

export default SignUp;
