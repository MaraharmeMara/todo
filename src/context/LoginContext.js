import React, { createContext, useState } from "react";

const EmailContext = createContext();

function EmailContextProvider({ children }) {
  const defaultEmail = "";
  const [changeUser, setChangeUser] = useState(email);
  return (
    <EmailContext.Provider
      value={{ defaultEmail, changeUser, setChangeUser }}
    ></EmailContext.Provider>
  );
}

export { EmailContextProvider, EmailContext };
