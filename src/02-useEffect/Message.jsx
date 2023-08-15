import { useEffect } from "react"

export const Message = () => {

    useEffect(() => {
        console.log("Mounted")

        return () => {
            console.log("Unmonted")
        }
    }, [])


    return (
        <>
            <h3>Usuario existe</h3>
        </>
    )
}
