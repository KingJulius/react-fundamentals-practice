'use client'

import { useEffect, useMemo, useState } from "react"

// Same delay for isDark state as well or any other component that uses this component
// as updating a state in react re-renders whole component
// & mockAPi is called every time component is rendered
// For Performance Improvement in certain cases
// useMemo - caches value so it does not have to be re-computed if value remains the same & is not effected by non-dependencies
// Why not Memoize everything? - gives performance & memory overheads & saves previous value on every render
// To be used:
// 1. Use when ur function call is incredibly slow & only when value is changed & 
// 2 for referential equality - make sure reference of an object or an array is the same as the last time it was rendered if nothing was changed internally
//  --> Only update reference of the object when content of the object changes instead of every time it is rendered

export const UseMemo = () => {
    const [number, setNumber] = useState(0)
    const [isDark, setIsDark] = useState(false)

    // const doubleNumber = mockApiCall(number)
    const doubleNumber = useMemo(() => {
        return mockApiCall(number)
    }, [number])
    
    // const themeStyles = {
    //     backgroundColor: isDark ? 'black' : 'white',
    //     color: isDark ? 'white' : 'black'
    // }
    const themeStyles = useMemo(() => {
        return {
            backgroundColor: isDark ? 'black' : 'white',
            color: isDark ? 'white' : 'black'
        }
    }, [isDark])

    // Is called even when number changed as it is when comparing 2 objects, their references are compared
    // So even if value is same but they can reference different objects & not equal
    useEffect(() => {
        console.log('Theme Changed')
    }, [themeStyles])


    return(
        <div>
            <h1>UseCallBack Hook</h1>
            <div>
                <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
                <br />
                <button onClick={() => setIsDark(prev => !prev)}>Update Theme</button>
                <div style={themeStyles}>{doubleNumber}</div>
            </div>
        </div>
    )
}

const mockApiCall = (num: number) => {
    console.log("Mock API Function has been called...")
    for (let i=0; i<=1000000000; i++){}
    return num*2
}

