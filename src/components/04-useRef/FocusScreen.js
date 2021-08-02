import React, { useRef } from 'react'

export const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = () => {
        // document.querySelector('input').focus();
        inputRef.current.select();
    };

    return (
        <div>
            <h1 className="text-center" > Focus  </h1>
            <hr/>
            
            <input
            ref={ inputRef } 
            className="form-control"
            placeholder="Name"
            />

            <button 
            className="btn btn-primary btn-block"
            onClick={ handleClick }
            >
                Focus
            </button>
            
        </div>
    )
}
