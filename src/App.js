import React from 'react'
import memesService from './services/memes'
import { useEffect, useState } from 'react'
import MemePostForm from './components/MemePostForm'
import MemeFeed from './components/MemeFeed'
import SearchBar from './components/SearchBar'

function App() {
  const [memes, setMemes] = useState([])
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const newMemes = await memesService.getAll()
      setMemes(newMemes.reverse())
      setSearchResults(newMemes)
    }
    fetchData()
  }, [])

  const addMeme = (file) => {
    const postData = async () => {
      const returnedMeme = await memesService.create(file)
      setMemes([returnedMeme.data].concat(memes))
      setSearchResults(memes)
    }
    postData()
  }

  if (memes.length === 0) {
    return <MemePostForm createMeme={addMeme} />
  }

  return (
    <div className="App">
      <h1>Meme Bank</h1>
      <SearchBar
        memes={memes}
        searchResults={searchResults}
        setSearchResults={setSearchResults}
      />
      <MemePostForm createMeme={addMeme} />
      <br />
      <MemeFeed memes={searchResults} />
    </div>
  )
}

export default App
