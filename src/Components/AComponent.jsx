import React from 'react'

const AComponent = (props) => {
    console.log(props)
    const name = props.props_name
    const age = props.props_age
  
  return (
    <div>My name is {name}  and my age is {age}</div>
  )
}

export default AComponent