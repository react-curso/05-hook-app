import React, { useLayoutEffect, useRef } from 'react'
import { useCounter } from '../hooks/useCounter'
import { useFetch } from '../hooks/useFetch'
import './layout.css'

export const LayoutEffect = () => {

    const { state, increment, decrement } = useCounter(1)

    const {  data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`);

    const { quote } = !!data && data[0];

    const paragraphTag = useRef();

    useLayoutEffect(() => {
        
        const size = paragraphTag.current.getBoundingClientRect();
        console.log(size);
       
    }, [ quote ])

    return (
        <div >
            <h1 className="text-center">Layout Example</h1>
            <hr />

            <blockquote className="blockquote text-right" >
                <p 
                className="mb-0" 
                ref={ paragraphTag }
                > 
                {quote}
                 </p>
            </blockquote> 

            {
                state !== 1 && (
                    <button className="btn btn-danger" onClick={decrement} > Back </button>
                )
            }

            <button className="btn btn-info" onClick={increment} > Next </button>
        </div>
    )
}
