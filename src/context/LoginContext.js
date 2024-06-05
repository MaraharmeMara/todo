import React, { createContext, useState } from "react";

const EmailContext = createContext();

function EmailContextProvider({ children }) {
  const defaultEmail = "";
  const [changeUser, setChangeUser] = useState(defaultEmail);
  return (
    <EmailContext.Provider value={{ defaultEmail, changeUser, setChangeUser }}>
      {children}
    </EmailContext.Provider>
  );
}

export { EmailContextProvider, EmailContext };
