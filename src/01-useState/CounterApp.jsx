import { useState } from "react"


export const CounterApp = () => {
    const [counter, setcounter] = useState(0)
    return (
        <>
            <h1>counter:</h1>
            <hr />
            <button className="btn btn-primary" onClick={() => setcounter(counter + 1)}>+1</button>
        </>
    )
}
