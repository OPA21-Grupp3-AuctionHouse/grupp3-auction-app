import React from "react";

function AuctionCategories({ sortBySearch }) {
  const categories = [
    "All",
    "Baseball Cards",
    "Football Cards",
    "Hockey Cards",
    "Pokémon",
    "Magic: The Gathering",
    "Sorcerer",
    "Final Fantasy",
    "Star Realms/Hero Realms",
    "Skyforge",
    "Yu-Gi-Oh!",
    "Android: Netrunner",
    "MetaZoo",
  ];

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target.value === "All") {
      sortBySearch("");
    } else {
      sortBySearch(e.target.value);
    }
  };

  /*
  let allCategories = provider.products.map((product) => product.category);
  let uniqueCategories = allCategories.filter(
    (item, i, arr) => arr.indexOf(item) === i
  );
  */

  return (
    <div className="auction-categories-container">
      {categories.map((category) => (
        <button onClick={handleClick} value={category}>
          {category}
        </button>
      ))}
    </div>
  );
}

export default AuctionCategories;
