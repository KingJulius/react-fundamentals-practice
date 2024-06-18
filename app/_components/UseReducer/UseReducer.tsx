"use client";

import React, { useState, useReducer } from "react";
import {
  reducerState as State,
  reducerAction as Action,
} from "@/@/_types/types";

// An alt for useState - when vals changed, element re-renders
// Can useReducer instead which handles everything within a single hook
// const [state, dispatch] = useReducer(reducer, initState)

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
        showText: state.showText,
      };
    case "TOGGLE":
      return {
        showText: !state.showText,
        count: state.count,
      };
    default:
      return state;
  }
};

const initState = {
  count: 0,
  showText: true,
};

export const UseReducer = () => {
  //   const [count, setCount] = useState(0);
  //   const [showText, setShowText] = useState(true);

  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <div className="flex flex-col text-center gap-5 mt-6">
      {/* <p>{count}</p> */}
      <p>{state.count}</p>
      <button
        onClick={() => {
          //   setCount((prevCount) => prevCount + 1);
          //   setShowText((showPrevText) => !showPrevText);
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "TOGGLE" });
        }}
        className="bg-gray-600"
      >
        Click Here
      </button>
      {/* {showText && <p>This is the text</p>} */}
      {state.showText && <p>This is the text</p>}
    </div>
  );
};
