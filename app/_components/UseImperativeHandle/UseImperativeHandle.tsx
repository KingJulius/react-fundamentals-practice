"use client";

import React, { useRef } from "react";
import Button from "./Button";
import { ButtonHandle } from "@/app/_types/types";

// Challenge: To control text inside child from parent
// can't pass state from parent to childen as props & as don't want to expose the state to parent
// Example toggling a snackbar whenever an event happens. Action of creating one happens outside Snackbar component.
export const UseImperativeHandle = () => {
  const btnRef = useRef<ButtonHandle>(null);
  const clickHandler = () => {
    if (btnRef.current) {
      btnRef.current.alterToggle();
    }
  };
  return (
    <div>
      <button onClick={clickHandler}>Parent Button</button>
      <Button ref={btnRef} />
    </div>
  );
};
