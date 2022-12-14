import React from 'react'
import { Spinner } from 'react-bootstrap'

function LoadingSpinner() {
  return (
    <>
      <Spinner animation="border" role="status" aria-label="Loading">
        <span className="sr-only">Loading...</span>
      </Spinner>
      <br />
      Ladataan tiedostoja palvelimelle
    </>
  )
}

export default LoadingSpinner
