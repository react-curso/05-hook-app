import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import a1 from '../../../../images/a1.jpg'
import a2 from '../../../../images/a2.jpg'
import a3 from '../../../../images/a3.jpg'
import '../home_components/carrusel.css';

export const Carrusel = () => {

    return (
        <div >
            <Carousel infiniteLoop={true} autoPlay={true} showThumbs={false}>
                <div>
                    <h1>s</h1>
                    <img src={a1} alt="developer" />
                </div>
                <div>
                    <img src={a2} alt="developer" />
                </div>
                <div>
                    <img src={a3} alt="developer" />
                </div>

            </Carousel >
            <div className="div">
                <button className="btn btn-outline-primary">View more</button>
            </div>
        </div>
    )

}
