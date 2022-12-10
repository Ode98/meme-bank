import React from 'react'
import memesService from './services/memes'
import { useEffect, useState } from 'react'
import MemePostForm from './components/MemePostForm'
import MemeFeed from './components/MemeFeed'

function App() {
  const [memes, setMemes] = useState([])
  const [searchResult, setSearchResult] = useState([])

  useEffect(() => {
    memesService.getAll().then((newMemes) => {
      setMemes(newMemes.reverse())
      setSearchResult(newMemes)
    })
  }, [])

  const addMeme = (file) => {
    memesService.create(file).then((returnedMeme) => {
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
      <br />
      <MemeFeed memes={memes} />
    </div>
  )
}

export default App
