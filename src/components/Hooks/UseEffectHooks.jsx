import React, { useEffect, useState } from 'react'
import UseRefHook from './UseRefHook';

const UseEffectHooks = () => {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(1)

  // variation:1  run on every render
  // useEffect(() => {
  //   alert("I will run on each render")
  // })


  // variation:2 
  // that runs on only first render
  // useEffect(() => {
  //   alert("I will run on only 1st render")
  // }, [])


  //variation : 3 when dependency provide in useeffect arr[]
  // useEffect(() => {
  //   alert("I will run every time when count is updated")
  // }, [count])

  //variation 4 : run on multiple dependencies 
  // useEffect(() => {
  //   alert("I will run every time when count/total is updated")

  // }, [count, total])

  //variation 5 : isse
  // useEffect(() => {
  //   alert("this count is updated")

  //   return () => {
  //     // clear karne ke liye
  //     alert("unmounted")
  //   }
  // }, [count])


  const handlerClick = () => {
    setCount(count + 1)
  }

  const handlerTotal = () => {
    setCount(count + 1)
  }
  return (
    <>
      <div className='m-2'>
        {/* <button className='border border-black p-1' onClick={handlerClick}>Click Me</button>
        <br />
        count is {count}
      </div>
      <div className='m-2'>
        <button className='border border-black p-1' onClick={handlerTotal}>Click Me</button>
        <br />
        total is {total} */}
        <UseRefHook />
      </div>
    </>
  )
}

export default UseEffectHooks