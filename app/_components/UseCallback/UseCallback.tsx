'use client'

import { useState, useCallback } from "react"
import List from "./List"

// Toggle Theme also causes other state to re-render
// Similar to useMemo
// useCallback does not re-render code unless certain parameters change
// useMemo - takes function & returns the return val of that function
// useCallback - takes function & return function
// For Memoizing Functions to prevent unnecessary re-renders of child component
// Memoizes the entire Function
// Needs to be used in case of referential equality issue
export const UseCallback = () => {
    const [number, setNumber] = useState(1)
    const [isDark, setIsDark] = useState(false)

    // ISSUE: Is being called re-created every single-time this component is rendered
    // const getNumbers = () => {
    //     return [number, number*1, number*2]
    // }

    // Now is only re-created if number is changed
    const getNumbers = useCallback(() => {
        return [number*2, number*4, number*8]
    }, [number])


    // Unlike useMemo, it can take input parameters as it does not return the function & only returns the value
    const getNumbers2 = useCallback(
      (incrementor: number) => {
        return [
          number * 2 + incrementor,
          number * 4 + incrementor,
          number * 8 + incrementor,
        ];
      },
      [number]
    );

    const theme = {
        backgroundColor: isDark ? '#333' : '#FFF',
        color: isDark ? '#FFF' : '#333'
    }

    return(
        <div style={theme}>
           <input type='number' value={number} onChange={e => setNumber(parseInt(e.target.value))} />
           <button onClick={() => setIsDark(prev => !prev)}>Toggle Theme</button>
           {/* <List getItems={getNumbers} /> */}
           <List getItems={getNumbers2} />
        </div>
    )
}