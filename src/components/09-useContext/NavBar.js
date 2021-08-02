import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (

        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            {/* <NavLink className="navbar-brand" >Navbar</NavLink> */}

            <div className="collapse navbar-collapse" >
                <div className="navbar-nav">

                    {/* NavLink me permite saber en la ruta en que estoy y
                    poder agregar estilos de css */}

                    <NavLink exact activeClassName="active" className="nav-link " to="./" >Home</NavLink>

                    <NavLink exact activeClassName="active" className="nav-link " to="/about" >About</NavLink>

                    <NavLink exact activeClassName="active" className="nav-link " to="/login" >Login</NavLink>

                    {/* <Link className="nav-link" to="/404"> 404 </Link> */}

                </div>
            </div>
        </nav>
    )
}
