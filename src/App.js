import React from 'react'
import memesService from './services/memes'
import { useEffect, useState } from 'react'
import MemePostForm from './components/MemePostForm'
import MemeFeed from './components/MemeFeed'
import SearchBar from './components/SearchBar'
import LoginForm from './components/LoginForm'

function App() {
  const [memes, setMemes] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const newMemes = await memesService.getAll()
      setMemes(newMemes.reverse())
      setSearchResults(newMemes)
    }
    fetchData()
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
    }
  }, [])

  const addMeme = (file) => {
    const postData = async () => {
      const returnedMeme = await memesService.create(file)
      const newMemes = [returnedMeme.data].concat(memes)
      setMemes(newMemes)
      setSearchResults(newMemes)
    }
    postData()
  }

  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem('loggedBlogappUser')
  }

  if (user === null) {
    return <LoginForm user={user} setUser={setUser} />
  }

  if (memes.length === 0) {
    return <MemePostForm createMeme={addMeme} />
  }

  return (
    <div className="App">
      <h1>MeemiPankki</h1>
      user: {user.username} <button onClick={handleLogout}>Logout</button>
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
