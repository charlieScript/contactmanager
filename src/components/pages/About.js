import React from 'react'

function About(props) {
  return (
    <div>
      <h1 className="display-4">
        {/* {props.match.params.id} */}
        About contact manager
      </h1>
      <p className="lead">Simple App to manage contacts</p>
      <p className="text-secondary">Version 1.0.0</p>
    </div>
  )
}

export default About
