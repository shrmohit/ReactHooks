import React, { useRef, useState } from 'react'


const UseRefHook = () => {
  const [count, setCount] = useState(0)
  const val = useRef(0)

  // case A
  function handleClick() {
    val.current = val.current + 1;
    console.log("value of val", val.current)
    setCount(count + 1)
  }
  //case B
  const btnRef = useRef()
  function handleColorChange() {
    btnRef.current.style.backgroundColor = "red"
  }

  return (
    <div>
      <button ref={btnRef} className='bg-black text-white' onClick={handleClick}>
        Increment
      </button>
      <br />
      <button onClick={handleColorChange}>Change Color on Click</button>
      <p>count : {count}</p>
    </div>
  )
}

export default UseRefHook