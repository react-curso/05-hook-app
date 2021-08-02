import React from 'react'

export const ShowIncrement = React.memo(({increment}) => {


    console.log('render')

    return (
        <button
            className="btn btn-outline-primary btn-block"
            onClick={() => {
                increment(5)
            }}
        >
            +1
        </button>
    )
})
