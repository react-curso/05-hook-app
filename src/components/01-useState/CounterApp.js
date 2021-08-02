import React, { useState } from 'react'
import './counter.css'


export const CounterApp = () => {

    const [counter, setCounter] = useState({
        counter1: 0,
        counter2: 20,
        counter3: 30
    });

    const { counter1, counter2 } = counter;

    return (
        <div className="mx-auto">
            <h1 className="text-center" >Counter 1 = {counter1}</h1>
            <h1 className="text-center" >Counter 2 = {counter2}</h1>
            <hr />
            <button
                className=" btn btn-primary btn-lg btn-block"
                onClick={() => {
                    setCounter({
                        ...counter, // guardar todos los valores sin renombrarlos
                        counter1: counter1 + 1,
                        //    counter2 : counter2
                        //    counter3 : counter3
                    })
                }}
            >
                +1
          </button>

        </ div>
    )
}
