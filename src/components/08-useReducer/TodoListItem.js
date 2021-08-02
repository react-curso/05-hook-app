import React from 'react'
import PropTypes from 'prop-types';

export const TodoListItem = ({ todo, i, handleDelete, handleToggle }) => {
    return (
        <li className="list-group-item">
            <p
                className={`${todo.done ? 'text-center complete' : 'text-center'}`}
                onClick={() => handleToggle(todo.id)}
            >
                {i + 1}. {todo.desc}
            </p>
            <div className="button">
                <button
                    className="btn btn-outline-danger "
                    onClick={() => {
                        handleDelete(todo.id);
                    }}
                >
                    Delete
                </button>
            </div>
        </li>)
}

TodoListItem.propTypes = {
    handleDelete: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired,
    i: PropTypes.number.isRequired,
    todo: PropTypes.object.isRequired
}
