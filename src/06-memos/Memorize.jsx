import React, { useState } from 'react'
import { useCounter } from '../hooks'
import { Small } from './Small';

export const Memorize = () => {

    const { counter, increment } = useCounter(1);
    const [state, setState] = useState(true)

    return (
        <>
            <h1>Counter: <Small value={counter} /> </h1>

            <hr />

            <button className='btn btn-primary' onClick={() => increment()}>+1</button>
            <button className='btn btn-primary' onClick={() => { setState(!state) }}>True/false - {JSON.stringify(state)}</button>
        </>
    )
}
