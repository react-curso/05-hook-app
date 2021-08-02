import React, { useMemo, useState } from 'react'
import { useCounter } from '../hooks/useCounter'

export const MemoHook = () => {

    const { increment, state } = useCounter(1000);

    const [show, setShow] = useState(true);

    const procesoPesado = (iteraciones) => {
        for (let index = 0; index < iteraciones; index++) {
            console.log('hey')
        }

        return `${iteraciones} iteraciones`
    };

    // GUARDA EN MEMORIA EL ESTADO Y RENDERIZA HASTA QUE CAMBIE
    const memoProceso =  useMemo(() => procesoPesado(state), [state]);

    return (
        <div>

            <h1 className="text-center" >Memo Hook </h1>
            <h2 className="text-center" >Counter  <small> {state} </small> </h2>
            <hr />

            <p> { memoProceso }</p>

            <button
                className="btn btn-outline-primary btn-block"
                onClick={increment}
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary btn-block"
                onClick={() => { setShow(!show) }}
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    )
}
