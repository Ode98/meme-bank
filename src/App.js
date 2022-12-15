import React from 'react'
import memesService from './services/memes'
import { useEffect, useState } from 'react'
import MemePostForm from './components/MemePostForm'
import MemeFeed from './components/MemeFeed'
import SearchBar from './components/SearchBar'
import LoginForm from './components/LoginForm'
import LoadingSpinner from './components/LoadingSpinner'

function App() {
  const [memes, setMemes] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [user, setUser] = useState(null)
  const [spinner, setSpinner] = useState(false)

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
      memesService.setToken(user.token)
    }
  }, [])

  const addMeme = (files) => {
    setSpinner(true)
    const postData = async () => {
      const postedMemes = []
      for (let i = 0; i < files.length; i++) {
        const returnedMeme = await memesService.create(files[i])
        postedMemes.push(returnedMeme.data)
      }
      const newMemes = postedMemes.concat(memes)
      setMemes(newMemes)
      setSearchResults(newMemes)
      setSpinner(false)
    }
    postData()
  }

  const handleLike = (meme, dislike, memeLikes) => {
    console.log('LikeMeme', meme.id, meme.likes)
    memesService.update(meme.id, {
      ...meme,
      likes: memeLikes + (dislike ? -1 : 1),
    })
  }

  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem('loggedBlogappUser')
  }

  if (memes.length === 0) {
    return <MemePostForm createMeme={addMeme} />
  }

  return (
    <div className="App">
      {/* <LoginForm user={user} setUser={setUser} /> */}
      <h1>MeemiPankki</h1>
      {/* {user !== null ? (
        <>
          {user.username} <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <></>
      )} */}
      <SearchBar
        memes={memes}
        searchResults={searchResults}
        setSearchResults={setSearchResults}
      />
      {/* <MemePostForm createMeme={addMeme} user={user} />
      {spinner ? <LoadingSpinner /> : <></>} */}
      <MemeFeed memes={searchResults} handleLike={handleLike} />
    </div>
  )
}

export default App
