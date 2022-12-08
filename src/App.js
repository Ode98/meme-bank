import React from 'react'
import memesService from './services/memes'
import { useEffect, useState } from 'react'
import Meme from './components/Meme'
import MemePostForm from './components/MemePostForm'

function App() {
  const [memes, setMemes] = useState([])

  useEffect(() => {
    memesService.getAll().then((newMemes) => setMemes(newMemes.reverse()))
    console.log('updated')
  }, [])

  const addMeme = (title, file) => {
    const memeObject = {
      title: title,
    }
    memesService.create(memeObject, file).then((returnedMeme) => {
      setMemes([returnedMeme.data].concat(memes))
    })
  }

  if (memes.length === 0) {
    return <MemePostForm createMeme={addMeme} />
  }

  return (
    <div className="App">
      <h1>Meme Bank</h1>
      <MemePostForm createMeme={addMeme} />
      {memes.map((meme) => (
        <Meme key={meme.id} meme={meme} />
      ))}
    </div>
  )
}

export default App
