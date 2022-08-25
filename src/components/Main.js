import React from 'react'

function Main(props) {
  return (
    <>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <button>Explore {props.courseName}</button>
    </>
  )
}

export default Main;