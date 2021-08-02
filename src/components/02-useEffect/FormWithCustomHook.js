import React, { useState } from 'react';
import { AlertMessage } from '../AlertMessage';
import { useForm } from '../hooks/useForm';
// import { ShowData } from '../ShowData';
import './effects.css';

export const FormWithCustomHook = () => {

    const { values, handleInputChange } = useForm({
        name: '',
        email: '',
        password: ''
    });
    const [validateForm, setValidateForm] = useState(false);
 

    const { name, email, password } = values;

    const handleSutmit = (e) => {
        e.preventDefault();
        if (name.trim().length <= 5 || email.trim() === '' || password.trim().length <= 5) {
            setValidateForm(true);
            return;
        }
        setValidateForm(false);
    }


    return (
        <>
            <form onSubmit={handleSutmit} >
                <h1 className="text-center" >Form Custom Hook</h1>
                <hr />
                <div className="form-group" >
                    <input
                        type="text"
                        name="name"
                        className="form-control mb-3"
                        placeholder="Your name"
                        autoComplete="off"
                        value={name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group" >
                    <input
                        type="text"
                        name="email"
                        className="form-control"
                        placeholder="Your mail"
                        autoComplete="off"
                        value={email}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group" >
                    <input
                        type="password"
                        name="password"
                        className="form-control mb-3"
                        placeholder="Your password"
                        value={password}
                        onChange={handleInputChange}
                    />
                </div>

                <button type="submit" className="btn btn-primary btn-block" >Agregar</button>

            </form>

            {validateForm && <AlertMessage />}

        </>
    )

}
