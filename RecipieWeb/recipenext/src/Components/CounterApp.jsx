import React, { useState } from "react";

const CounterApp = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count+1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

  return (
    <>
      <div>
        <h1 className="text-primary">Counter App</h1>
        <h2 className="">Counter: {count}</h2>
        <button onClick={increment} className="btn btn-primary">Increment</button>
        <button onClick={decrement} className="btn btn-danger">Decrement</button>
      </div>
    </>
  );
};

export default CounterApp;
