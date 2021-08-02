import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'

import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

import './style.css'

const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];

    // return []
};

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])


    const handleDelete = (todoId) => {

        const action = {
            type: 'delete',
            payload: todoId
        }
        dispatch(action);
    };

    const handleToggle = (todoID) => {

        dispatch({
            type: 'toggle',
            payload: todoID
        })

    }

    const handleAddTodo = (newTodo) => {

        dispatch({
            type: 'add',
            payload: newTodo
        });
    };

    return (
        <div className="container" >

            <h2 className="text-center title" >TodoApp ( {todos.length} ) </h2>
            <hr />
            <div className="row">

                <div className="col-md-7" >

                    <TodoList
                        todos={todos}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    />


                </div>

                <div className="col-md-5" >

                    <TodoAdd
                        handleAddTodo={handleAddTodo}
                    />

                </div>

            </div>

        </div>

    )
}
