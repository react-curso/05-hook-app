import React from 'react'

// MEMO RENDERIZA EL COMPONENTE SI LAS PROPS CAMBIAN

export const Small = React.memo(({ value }) => {

    console.log('small component');

    return (
        <small>
            { value}
        </small>
    )
})
