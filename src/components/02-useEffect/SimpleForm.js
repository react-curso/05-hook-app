import React, { useEffect, useState } from 'react';
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    // ACTIVA UNA VEZ
    useEffect(() => {
        console.log('hey')  
    }, [])

    // ACTIVA CUANDO CAMBIA FORM
    useEffect(() => {
        console.log('cambio formulario')
    }, [formState])
    
    // ACTIVA CUANDO CAMBIA EMAIL
    useEffect(() => {
        console.log('email')
    }, [email])

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }


    return (
        <>
            <h1 className="text-center" >useEffect</h1>
            <hr />
            <div className="form-group" >
                <input
                    type="text"
                    name="name"
                    className="form-control mb-3"
                    placeholder="Your name"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />

                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Your mail"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div>

            { (name === '123') && <Message /> }
        </>
    )

}
