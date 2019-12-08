import React from 'react'

let count = 0
const Child = () => {
  return(
    <div>
      child Component rendered {++count} times
    </div>
  )
}


export default Child