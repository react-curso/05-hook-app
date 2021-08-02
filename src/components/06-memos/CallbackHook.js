import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const increment =  useCallback( (factor) => {
        setCounter(c => c + factor);
    },[ setCounter ] )

    return (
        <div>
            <h1 className="text-center" >CallBack Hook: {counter}</h1>
            <hr />

            <ShowIncrement increment={increment} />
        </div>
    )
}
