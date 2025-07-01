import React, { useContext } from 'react'
import { myContext } from '../../App'

const First = () => {
  let { name } = useContext(myContext)
  return (
    <div>
      {name?.map((curvalue, index, arr) => (

        <h1 key={index}>car name {curvalue.name}</h1>

      ))}

    </div>
  )
}

export default First;