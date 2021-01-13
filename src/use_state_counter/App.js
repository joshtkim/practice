import React, { useState } from 'react';

let App = () => {
  const [count, setCount] = useState(4)

  let decrease = () => {
    setCount(prevCount => prevCount - 1)
  }

  let increase = () => {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <div>
      <button onClick={decrease}>-</button>
      <span>{count}</span>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
