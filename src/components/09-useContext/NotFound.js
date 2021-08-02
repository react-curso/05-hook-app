import React from 'react'
import {Link} from 'react-router-dom'
import './style_components/not_found.css'
import error from '../../images/not-found.svg'

export const NotFound = () => {
    return (
        <>
            <div >

                <div className="row">

                    <div className="col-md-4" >

                        <h1 className="text-center" >OOPS!</h1>
                        <h3 className="text-center" >Page Not found</h3>

                        <Link to="./">
                        <button className="btn btn-info">Home</button>
                        </Link>

                    </div>
                    <div className="col-md-8">

                        <img className="img-fluid" alt="page not found" src={error} />

                    </div>
                </div>
            </div>
        </>
    )
}
