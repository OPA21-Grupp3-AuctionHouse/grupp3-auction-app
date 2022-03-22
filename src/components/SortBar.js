import React from "react";

/*
const sortByName = () => {

}

const sortByPrice = () => {
    
}

const sortByBuyout = () => {
    
}
*/

const SortBar = ({ sortByName, sortByPrice, sortByBuyout }) => {
  return (
    <div className="sort-outer-container">
      <div className="image-bar">Image</div>
      <div className="category-bar">Category</div>
      <div className="name-bar" onClick={sortByName}>
        Name
      </div>
      <div className="description-bar">Description</div>
      <div className="price-bar" onClick={sortByPrice}>
        Price
      </div>
      <div className="buyout-bar" onClick={sortByBuyout}>
        Buyout
      </div>
    </div>
  );
};

export default SortBar;
