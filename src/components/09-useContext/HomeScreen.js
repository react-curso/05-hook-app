import React, { useContext } from 'react'
import { UserContext } from './UserContext'
// import { Carrusel } from './style_components/home_components/Carrusel'


export const HomeScreen = () => {

    const { user, setUser } = useContext(UserContext);



    return (
        <div>
            <h1>Home</h1>
            {/* <Carrusel /> */}

            <pre> {JSON.stringify(user, null, 3)} </pre>
            
        </div>
    )
}
