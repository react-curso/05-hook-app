import React, {useState } from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'

export const RealRef = () => {

    // const isReady = useRef(true);

    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show)
    };


    return (
        <div>
            <h1 className="text-center">Real Ref</h1>
            <hr />

            <button
                className="btn btn-outline-primary btn-block"
                onClick={handleShow}
            >
                Component
            </button>

            { show && <MultipleCustomHooks />}
        </div>
    )
}
