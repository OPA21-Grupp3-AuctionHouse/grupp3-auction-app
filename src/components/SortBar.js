import React from "react";

const SortBar = ({ sortByName, sortByPrice, sortByBuyout }) => {
  return (
    <div className="sort-outer-container">
      <button className="image-bar">Image</button>
      <button className="category-bar">Category</button>
      <button className="name-bar" onClick={sortByName}>
        Name
      </button>
      <button className="description-bar">Description</button>
      <button className="price-bar" onClick={sortByPrice}>
        Price
      </button>
      <button className="buyout-bar" onClick={sortByBuyout}>
        Buyout
      </button>
    </div>
  );
};

export default SortBar;
