import React, { useState } from "react";
import logo from "../img/logo.png";
import Modal from "./Modal";

import SignIn from "../Signin/SignIn";

function User() {
  const [showModal, setShowModal] = useState(false);
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="user">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="info">
        <p>Todo App</p>
        <button className="log" onClick={() => setShowModal(true)}>
          Log In
        </button>
        <Modal showModal={showModal} setShowModal={setShowModal}>
          <SignIn signIn={SignIn} />
        </Modal>
      </div>
    </div>
  );
}
export default User;
