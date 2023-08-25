import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'
import { useTodos } from '../hooks'



export const TodoApp = () => {

    const { todos, todosCount, pendingTodosCount, handleDeleteTodo, handlerNewTodo, onToggleTodo } = useTodos()


    return (
        <>
            <h1>TodoApp ({todosCount}), <small className=''>pendientes: {pendingTodosCount}</small></h1>
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
