import { useForm } from "../hooks/useForm";


export const TodoAdd = ({ onNewTodo }) => {

    const { description, onResetForm, OnInputChange } = useForm({
        description: ''
    })

    const onFormSubmit = (event) => {
        event.preventDefault();

        if (description.length <= 0) return;
        const newTodo = {
            description,
            done: false,
            id: new Date().getTime(),
        }
        onNewTodo(newTodo)
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input type="text" placeholder='¿Que hay que hacer?'
                className='form-control'
                name="description" value={description} onChange={OnInputChange} />

            <button className='btn btn-outline-primary mt-1'
                type="submit" >Agregar</button>
        </form>
    )
}
