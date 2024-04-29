'use client'

import { useState } from "react"

// Only for Functional Components
// When function runs, Hooks are always executed in the same order (cannot be conditional)
// () => setVal(count - 1)
// () => setVal(prevVal => prevVal + 1) --> TO UPDATE BASED ON THE PREVIOUS VALUE eg: 2 setVal(count - 1), would not update twice if not

export const UseState = () => {
    // 1. Runs only 1 time when called initially
    function countInitial() {
        console.log("run function")
        return 4
    }
    const [tmp, setTmp] = useState(() => countInitial())
    
    // 2. When complex state
    const [state, setState] = useState({ count: 4, theme: 'blue' })
    function testFunction() {
        setState(prevState => {
            return {
                ...prevState, // So rest of state is saved
                count: prevState.count + 1
            }
        })
    }

    // 3. Mentioned Above
    const [val, setVal] = useState(0)
    const handleIncrement = () =>{
        // setVal(count + 1) // so say it becomes 4
        // setVal(count + 1) // this will also remain 4
        setVal(prevVal => prevVal + 1)
        setVal(prevVal => prevVal + 1)
    }
    const handleDecrement = () =>{
        // setVal(count - 1)
        // setVal(count - 1)
        setVal(prevVal => prevVal - 1)
        setVal(prevVal => prevVal - 1)
    }
    return (
        <div>
            <button onClick={handleIncrement}>+</button>
            <span>{val}</span>
            <button onClick={handleDecrement}>+</button>
        </div>
    )
} 