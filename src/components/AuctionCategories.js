import React, { useContext } from "react";
import {DataContext} from "./AuctionPage";

function AuctionCategories({sortBySearch}) {

  const products = useContext(DataContext);

  const handleClick = (e) => {
    e.preventDefault();
    console.log(e.target.value)
    if (e.target.value === "All") {
      sortBySearch("")
    } else {
      sortBySearch(e.target.value)
    }
  }

  let allCategories = products.map((product) => product.category);
  let uniqueCategories = allCategories.filter(
    (item, i, arr) => arr.indexOf(item) === i
  );

  return (
      <div className="auction-categories-container">
        <button onClick={handleClick} value="All">All</button>
        {uniqueCategories.map((category) => (
          <button onClick={handleClick} value={category}>{category}</button>
        ))}
      </div>
  );
}

export default AuctionCategories;