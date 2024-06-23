"use client";

import { useState, createContext, Dispatch, SetStateAction } from "react";
import Login from "./Login";
import User from "./User";

interface AppContextType {
  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
}

export const AppContext = createContext<AppContextType | null>(null);

// no need to pass state through props for components that do not require it
export const UseContext = () => {
  const [username, setUsername] = useState("");
  return (
    // <>
    //   <Login setUsername={setUsername} />
    //   <User username={username} />
    // </>
    <AppContext.Provider value={{ username, setUsername }}>
      <Login />
      <User />
    </AppContext.Provider>
  );
};
