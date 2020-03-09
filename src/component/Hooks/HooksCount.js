import React, { useState } from 'react'


const HooksCount = () => {
  const [count, setCount] = useState(0);
  const addCount = () => setCount(count + 1);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={addCount}>Add</button>
    </div>
  )
}
export default HooksCount;