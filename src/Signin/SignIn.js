import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import Modal from "../components/Modal";
import SignUp from "./SignUp";
import { auth } from "../firebase";

const SignIn = ({ changeModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredenial) => {
        console.log(userCredenial);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="sign-in">
      <form onSubmit={signIn}>
        <h1>Log In to Your Account</h1>
        <input
          type="email"
          placeholder="Enter your Email"
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
          Log in
        </button>
      </form>
      <a className="link" onClick={changeModal}>
        Create Account
      </a>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <SignUp signUp={SignUp} />
      </Modal>
    </div>
  );
};

export default SignIn;
