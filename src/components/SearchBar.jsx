import React from "react";
import searchAlg from "../helpers/searchAlg";

const SearchBar = ({ memes, setSearchResults }) => {
  const handleSubmit = (e) => e.preventDefault();
  const memesToSearch = [...memes];
  const handleSearchChange = (e) => {
    if (e.target.value === "") {
      return setSearchResults(memesToSearch);
    }
    const searchArray = e.target.value
      .trim()
      .toLowerCase()
      .replace(/-/g, "")
      .split(" ");
    const resultsArray = searchAlg(memesToSearch, searchArray);
    setSearchResults(resultsArray);
  };
  return (
    <>
      <form className="search-bar" onSubmit={handleSubmit}>
        <input type="text" id="search" onChange={handleSearchChange} />
        <button>Hae</button>
      </form>
    </>
  );
};
export default SearchBar;
