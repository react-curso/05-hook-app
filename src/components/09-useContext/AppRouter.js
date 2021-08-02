import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    // Link
} from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { NavBar } from './NavBar';

// import { NotFound } from './NotFound';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />

                <div className="container">
                    <Switch>
                        <Route exact path="/about" component={AboutScreen} />
                        <Route exact path="/login" component={LoginScreen} />
                        <Route exact path="/" component={HomeScreen} />

                        {/* Por si no encuentra una Ruta */}
                        {/* <Route path="/404" component={NotFound} />  */}

                        {/* Redirecciona la pagina si no encuentra la ruta */}
                        <Redirect to="/404" />

                    </Switch>
                </div>

            </div>
        </Router>
    )
}
