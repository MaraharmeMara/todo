import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";

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
          onChange={(e) => setUserName(e.target.value)}
        ></input>
        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit" className="btn">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
