import React, { useContext, useState } from "react";
import logo from "../img/logo.png";
import Modal from "./Modal";

import SignIn from "../Signin/SignIn";
import SignUp from "../Signin/SignUp";
import { EmailContext } from "../context/LoginContext";

function User() {
  const [showModal, setShowModal] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const [current, setCurrent] = useState(0);
  const { changeUser } = useContext(EmailContext);

  function changeModal() {
    if (current === 0) {
      setCurrent(1);
    } else {
      setCurrent(0);
    }
  }

  return (
    <div className="user">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="info">
        <p>Todo App</p>
        {changeUser === "" && (
          <button className="log" onClick={() => setShowModal(true)}>
            Log In
          </button>
        )}
        {changeUser !== "" && <span>Email: {changeUser}</span>}

        <Modal showModal={showModal} setShowModal={setShowModal}>
          {current === 0 && (
            <SignIn signIn={SignIn} changeModal={changeModal} />
          )}
          {current === 1 && <SignUp visibili signUp={SignUp} />}
        </Modal>
      </div>
    </div>
  );
}
export default User;
