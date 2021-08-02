import React, { useState } from 'react'
import { useCounter } from '../hooks/useCounter'
import { Small } from './Small';

export const Memorize = () => {

    const { increment, state } = useCounter( 0 );

    const [show, setShow] = useState(true);

    return (
        <div>
            <h1 className="text-center" >Counter  <Small value={ state } /> </h1>
            <hr />

            <button
            className="btn btn-outline-primary btn-block"
            onClick={ increment }
            >
                +1
            </button>

            <button
            className="btn btn-outline-primary btn-block"
            onClick={ () => { setShow( !show ) } }
            >
                Show/Hide { JSON.stringify(show) }
            </button>
        </div>
    )
}
