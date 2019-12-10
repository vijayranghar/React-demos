import React, { memo } from 'react'

let count = 0
let Child = (props) => {
  props.callback()
  return(
    <div>
      <br />
      <br />
      <h1>Counter is {props.counter} </h1>
      child Component rendered {++count} times
    </div>
  )
}


export default Child = memo(Child)