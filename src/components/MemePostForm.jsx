import { useState } from 'react'

const MemePostForm = () => {
  const [file, setFile] = useState(null)
  const [title, setTitle] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target)
  }

  console.log(title, file)

  // if (file) {
  //   return null
  // }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Nimeä postaus</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <input
          type="file"
          id="file"
          name="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <br />
        <button type="submit">Lähetä</button>
      </form>
    </>
  )
}

export default MemePostForm
