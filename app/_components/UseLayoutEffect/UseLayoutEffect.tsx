'use client'

import { useEffect, useLayoutEffect, useRef } from "react"

// Similar in struct to useEffect - async
// UseLayoutEffect is not async
// it runs sync between when react calculates ur dom & paints it to the screen
// useful when u want to do something based on the layout of the dom
// UseEffect runs after the dom has been painted/page has rendered
// called in an earlier stage of the page rendering than useEffect
export const UseLayoutEffect = () => {
    const inputRef = useRef<HTMLInputElement>(null)

    useLayoutEffect(() => {
        console.log('useLayoutEffect called...')
        if(inputRef.current){
            console.log(inputRef.current.value)
        }
    }, [])

    useEffect(() => {
        console.log('useEffect called...')
        if(inputRef.current){
            inputRef.current.value = 'updated'
            console.log(inputRef.current.value)
        }
    }, [])

    return (
        <div>
            <input ref={inputRef} value={'initial value'} />
        </div>
    )
}