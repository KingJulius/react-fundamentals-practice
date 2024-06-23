import React, { Dispatch, SetStateAction, useContext } from "react";
import { AppContext } from "./UseContext";

// interface LoginProps {
//   setUsername: Dispatch<SetStateAction<string>>;
// }

const Login = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("setUsername must be used within an AppContext.Provider");
  }

  const { setUsername } = context;

  return (
    <input
      type="text"
      onChange={(event) => {
        setUsername(event.target.value);
      }}
    />
  );
};

export default Login;
