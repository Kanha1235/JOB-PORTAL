import React from "react";
import { useState } from "react";

import { userContext } from "./userContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    user_name: "Kanhaiya",
    email: "kanhaiyajnvs@gmail.com",
  });
  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
