import React, { useState } from 'react'

const UseStateHook = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>counter {count}</h1>
      <button onClick={() => { setCount(count + 1) }}>Add</button>
    </div>
  )
}

export default UseStateHook