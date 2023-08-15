import { useEffect, useState } from "react"
import { Message } from "./Message";


export const SimpleForm = () => {

    const [formState, setFormState] =
        useState({ username: 'edgardo', email: 'edgardo@gmail.com' });

    const { username, email } = formState;

    const OnInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    useEffect(() => {
        // console.log("useEffect called!")
    }, [])


    useEffect(() => {
        // console.log("FormState called!")


    }, [formState])

    useEffect(() => {
        // console.log("email called!")


    }, [email])




    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />
            <input type='text' className="form-control"
                placeholder='Username' name="username" value={username} onChange={OnInputChange} />
            <input type='email' className="form-control mt-2"
                placeholder='Email' name="email" value={email} onChange={OnInputChange} />
            {username === "edgardo2" && <Message />}
        </>
    )
}
