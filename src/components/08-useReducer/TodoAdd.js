import React from 'react'
import { useForm } from '../hooks/useForm'

export const TodoAdd = ({ handleAddTodo }) => {

    const { handleInputChange, values: { description }, reset } = useForm({
        description: ''
    })

    const handleSutmit = (e) => {
        e.preventDefault();

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }
       
        handleAddTodo( newTodo );
        
        reset();
    }


    return (
        <>

            <h4 className="text-center" >Add TODO</h4>
            <hr />

            <form onSubmit={handleSutmit} className="form-todo">

                <input
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="Description"
                    autoComplete="off"
                    onChange={handleInputChange}
                    value={description}

                />

                <button
                    className="btn btn-outline-info mt-2 btn-block"
                    type="submit"
                >
                    Add
                        </button>

            </form>

        </>
    )
}
