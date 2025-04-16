import React, { useState } from "react";

const Counter = () => {
    const[count,setCount] = useState(0);

    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => prev - 1);

    return(
        <div>
        <h1>Counter App</h1>
        <h5>Count: {count}</h5>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Counter;