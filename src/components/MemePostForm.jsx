import React from 'react'
import { useState } from 'react'

const MemePostForm = ({ createMeme }) => {
  const [file, setFile] = useState(null)
  const [title, setTitle] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    createMeme(title, file)
    setFile(null)
    setTitle('')
  }

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Give a title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
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
    </>
  )
}

export default MemePostForm
