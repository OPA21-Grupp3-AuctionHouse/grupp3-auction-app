import React, { useState } from "react";
import {BsSearch} from "react-icons/bs";

const SearchBar = ({sortBySearch}) => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sortBySearch(searchInput);
  };

  return (
    <div className="search-container">
        <form className="search-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Search..."
                name="search"
                onChange={handleChange}
                value={searchInput}
            />
            <button type="submit">
                <BsSearch />
            </button>
        </form>
    </div>
  );
};

export default SearchBar;