import React from 'react'
import { useCounter } from '../hooks/useCounter'
import { useFetch } from '../hooks/useFetch'
import './examples.css'

export const MultipleCustomHooks = () => {

    const { state, increment, decrement } = useCounter(1)

    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`);

    const { quote, author } = !!data && data[0];

    return (
        <div >
            <h1 className="text-center">Breaking Bad Api</h1>
            <hr />
            {
                loading
                    ? (
                        <div className="alert alert-info text-center" >
                            Loading...
                        </div>
                    )
                    : (
                        <blockquote className="blockquote text-right" >

                            <p className="mb-0" > {quote} </p>
                            <footer className="blockquote-footer" > {author} </footer>

                        </blockquote>
                    )
            }
            {
                state !== 1 && (
                    <button className="btn btn-danger" onClick={decrement} > Back </button>
                )
            }

            <button className="btn btn-info" onClick={increment} > Next </button>
        </div>
    )
}
