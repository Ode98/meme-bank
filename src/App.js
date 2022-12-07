import memesService from './services/memes'
import { useEffect, useState } from 'react'
import Meme from './components/Meme'
import MemePostForm from './components/MemePostForm'

function App() {
  const [memes, setMemes] = useState([])

  useEffect(() => {
    memesService.getAll().then((newMemes) => setMemes(newMemes))
  }, [])

  if (memes.length === 0) {
    return null
  }

  return (
    <div className="App">
      <h1>Meme Bank</h1>
      <MemePostForm />
      {memes.map((meme) => (
        <Meme key={meme.id} meme={meme} />
      ))}
    </div>
  )
}

export default App
