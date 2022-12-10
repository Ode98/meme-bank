import React from 'react'
import searchAlg from '../searchAlg'

const SearchBar = ({ memes, searchResults, setSearchResults }) => {
  const handleSubmit = (e) => e.preventDefault()

  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(memes)

    const resultsArray = memes.filter((meme) =>
      meme.tags.includes(e.target.value)
    )
    setSearchResults(resultsArray)
  }

  searchAlg()

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
