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
    <div>
      <form className="search" onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          id="search"
          onChange={handleSearchChange}
        />
        <button className="search-button">Search</button>
      </form>
    </div>
  )
}
export default SearchBar
