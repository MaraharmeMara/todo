import React, { useContext, useState } from "react";
import logo from "../img/logo.png";
import Modal from "./Modal";

import SignIn from "../Signin/SignIn";
import SignUp from "../Signin/SignUp";
import { EmailContext } from "../context/LoginContext";

import { signOut } from "firebase/auth";
import { auth } from "../firebase";

function User() {
  const [showModal, setShowModal] = useState(false);
  const [current, setCurrent] = useState(0);
  const { changeUser } = useContext(EmailContext);
  const { setChangeUser } = useContext(EmailContext);

  function changeModal() {
    if (current === 0) {
      setCurrent(1);
    } else {
      setCurrent(0);
    }
  }

  async function handleLogout() {
    try {
      const a = await signOut(auth);
      console.log("logout", a);
      setChangeUser("");
    } catch (e) {
      console.log("error", e);
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
        {changeUser !== "" && (
          <>
            {" "}
            <span>Email: {changeUser}</span>
            <button className="log" onClick={handleLogout}>
              Log Out
            </button>
          </>
        )}

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
