import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'

export const TodoApp = () => {

    const initialState = [
        // {
        //     id: new Date().getTime(),
        //     description: 'recolectar del piedra del alma',
        //     done: false,

        // },

    ]

    const init = () => {
        return JSON.parse(localStorage.getItem("todos")) || []
    }

    const [todos, dispatch] = useReducer(todoReducer, initialState, init)
    const handlerNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        dispatch(action);
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        })
    }
    const onToggleTodo = (id) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        })
    }

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])


    return (
        <>
            <h1>TodoApp ({todos.length}), <small className=''>pendientes: {0}</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos}
                        onDeleteTodo={handleDeleteTodo}
                        onToggleTodo={onToggleTodo} />
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
