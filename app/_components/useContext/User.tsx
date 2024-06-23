import React, { useContext } from "react";
import { AppContext } from "./UseContext";

// interface LoginProps {
//   username: string;
// }

const User = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("username must be used within an AppContext.Provider");
  }

  const { username } = context;
  return <div>User: {username}</div>;
};

export default User;
