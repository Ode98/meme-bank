import React from 'react'
import searchAlg from '../helpers/searchAlg'

const SearchBar = ({ memes, setSearchResults }) => {
  const handleSubmit = (e) => e.preventDefault()

  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(memes)
    const searchArray = e.target.value.trim().replace(/-/g, '').split(' ')
    const resultsArray = searchAlg(memes, searchArray)
    setSearchResults(resultsArray)
  }

  return (
    <>
      <form className="search-bar" onSubmit={handleSubmit}>
        <input type="text" id="search" onChange={handleSearchChange} />
        <button>Hae</button>
      </form>
    </>
  )
}
export default SearchBar
