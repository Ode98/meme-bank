import React from 'react'
import { useState } from 'react'

const MemePostForm = ({ createMeme }) => {
  const [file, setFile] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    createMeme(file)
    setFile(null)
    document.getElementById('formid').reset()
  }

  const handleFileChange = (event) => {
    setFile(event.target.files[0])
  }

  return (
    <div>
      <form id="formid" onSubmit={handleSubmit}>
        <input
          className="custom-file-input"
          type="file"
          id="file"
          name="file"
          onChange={handleFileChange}
        />
        <br />
        <button type="submit">Lähetä</button>
      </form>
    </div>
  )
}

export default MemePostForm
