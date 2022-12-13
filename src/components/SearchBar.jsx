import React from 'react'
import searchAlg from '../helpers/searchAlg'
// import { useMemo, useState } from 'react'

const SearchBar = ({ memes, setSearchResults }) => {
  const handleSubmit = (e) => e.preventDefault()
  // const [searchArray, setSearchArray] = useState([])

  // const resultsArray = useMemo(
  //   () => searchAlg(memes, searchArray),
  //   [memes, searchArray]
  // )

  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(memes)
    const searchArray = e.target.value.trim().replace(/-/g, '').split(' ')
    const resultsArray = searchAlg(memes, searchArray)
    // setSearchArray(e.target.value.trim().replace(/-/g, '').split(' '))
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
        <button className="search-button">Hae</button>
      </form>
    </div>
  )
}
export default SearchBar
