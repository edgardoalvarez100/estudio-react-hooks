import React, { useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'

export const TodoApp = () => {

    const initialState = [
        {
            id: new Date().getTime(),
            description: 'recolectar del piedra del alma',
            done: false,

        },
        {
            id: new Date().getTime() * 2,
            description: 'recolectar del piedra del poder',
            done: false,

        },
    ]

    const [todos, dispatch] = useReducer(todoReducer, initialState)
    const handlerNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        dispatch(action);
    }

    return (
        <>
            <h1>TodoApp ({todos.length}), <small className=''>pendientes: {0}</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} />
                </div>

                <div className="col-5">

                    <h4>Agregar ToDO</h4>
                    <hr />
                    <TodoAdd onNewTodo={handlerNewTodo} />
                </div>
            </div>

        </>
    )
}
