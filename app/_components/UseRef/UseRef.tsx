"use client";

import { useEffect, useRef, useState } from "react";

// Number of times a component rendered on screen?
// Similar to State - store previous value & persists within it
// Use Case - reference html elements
// Can be used to store previousValue of State as well
// Shouldn't use this to update state, value & onChanges
export const UseRef = () => {
  const [name, setName] = useState("");
  // const [renderCount, setRenderCount] = useState(0)
  const renderCount = useRef(0);

  // 1. Without a list of dependencies, this can lead to an infinite chain of updates.
  //    1st render --> Called which triggers another re-render due to state update & so on
  useEffect(() => {
    //    setRenderCount(prevRenderCount => prevRenderCount + 1)
    renderCount.current = renderCount.current + 1;
  });

  // Solution - useRef - persist between render of component like useState
  // but unlike useState does not re-render component when it gets changed

  // 2.
  const [currentVal, setCurrentVal] = useState("");
  const prevVal = useRef("");

  useEffect(() => {
    prevVal.current = currentVal;
  }, [currentVal]);

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div>My name is {name}</div>
      {/* <div>Number of timnes rendered: {renderCount}</div> */}
      <div>Number of timnes rendered: {renderCount.current}</div>
      <br />
      <input
        value={currentVal}
        onChange={(e) => setCurrentVal(e.target.value)}
      />
      <div>
        Value: {currentVal} | Previous Value: {prevVal.current}
      </div>
    </>
  );
};
