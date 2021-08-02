import React from 'react'
import PropTypes from 'prop-types';
import { TodoListItem } from './TodoListItem'

export const TodoList = ({ todos, handleToggle, handleDelete }) => {

    return (
        <>
            {todos.map((todo, i) => 
                (
                <TodoListItem
                    key={todo.id}
                    i={i}
                    todo={todo}
                    handleDelete={handleDelete}
                    handleToggle={handleToggle}
                />
                )
            )}
        </>
    )

}

TodoList.propTypes ={
    todos: PropTypes.array.isRequired,
    handleToggle: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
}
