import React, { useContext } from "react";
import {DataContext} from "./AuctionPage";

function AuctionCategories() {

  const products = useContext(DataContext);

  let allCategories = products.map((product) => product.category);
  let uniqueCategories = allCategories.filter(
    (item, i, arr) => arr.indexOf(item) === i
  );

  return (
      <div className="auction-categories-container">
        <h4>All</h4>
        {uniqueCategories.map((category) => (
          <h4>{category}</h4>
        ))}
      </div>
  );
}

export default AuctionCategories;