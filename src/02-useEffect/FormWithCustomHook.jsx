import { useEffect } from "react"
import { useForm } from "../hooks/useForm"



export const FormWithCustomHook = () => {
    const { username, email, password, formState, OnInputChange, onResetForm } = useForm({
        username: "",
        email: "",
        password: "",
    });

    // const { username, email, password } = formState;

    // useEffect(() => {
    //     // console.log("useEffect called!")
    // }, [])

    // useEffect(() => {
    //     // console.log("FormState called!")
    // }, [formState])

    // useEffect(() => {
    //     // console.log("email called!")
    // }, [email])

    return (
        <>
            <h1>Formulario con Custom Hook</h1>
            <hr />
            <input type='text' className="form-control"
                placeholder='Username' name="username" value={username} onChange={OnInputChange} />
            <input type='email' className="form-control mt-2"
                placeholder='Email' name="email" value={email} onChange={OnInputChange} />
            <input type='password' className="form-control mt-2"
                placeholder='Password' name="password" value={password} onChange={OnInputChange} />

            <button className="btn btn-primary mt-2" onClick={onResetForm}>Borrar</button>

        </>
    )
}
