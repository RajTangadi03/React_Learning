import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [val, setVal] = useState(0);

    function increase() {
        setVal(val+1);
    }

    function decrease() {
        setVal(val-1);
    }

    return (
        <div className='App'>
            <h1>{val}</h1>
            <div className='container'>
                <button onClick={increase}>Increase</button>
                <button onClick={decrease}>Decrease</button>
            </div>
        </div>
    )
}

export default Counter