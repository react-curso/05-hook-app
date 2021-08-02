import { useState } from "react"

// obtener entradas de formulasio

export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState);
    
    const reset = () => {
        setValues(initialState);
    }

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value
        })
    }

    return {
        handleInputChange,
        values,
        reset
    }
}