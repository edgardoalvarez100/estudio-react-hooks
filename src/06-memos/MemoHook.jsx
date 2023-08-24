import React, { useMemo, useState } from 'react'
import { useCounter } from '../hooks'

const heavyStuff = (iterationNumber = 100) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log("ahi vamos...")
    }

    return `${iterationNumber} iteraciones realizadas`;
}

export const MemoHook = () => {

    const { counter, increment } = useCounter(1);
    const [state, setState] = useState(true)

    const memorizeValue = useMemo(() => heavyStuff(counter), [counter])

    return (
        <>
            <h1>Counter: <small>{counter}</small> </h1>

            <hr />

            <h4>{memorizeValue}</h4>

            <button className='btn btn-primary' onClick={() => increment()}>+1</button>
            <button className='btn btn-primary' onClick={() => { setState(!state) }}>True/false - {JSON.stringify(state)}</button>
        </>
    )
}
