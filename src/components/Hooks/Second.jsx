import React, { useContext } from 'react'
import { myContext } from '../../App'

const Second = () => {
  let { age } = useContext(myContext)
  return (
    <div>{age.map((curvalue, index, arr) => (
      <h1 key={index}>{curvalue.age}</h1>
    ))}</div>
  )
}

export default Second