import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {

    const { user, setUser } = useContext(UserContext);


    return (
        <>
            <h1>login</h1>
            <hr />

            <button className="btn btn-primary" onClick={() => {
                setUser({ id: 123, name: "Edgardo", email: "edgardo@live.com" })
            }}>Establecer usuario</button>

        </>
    )
}
