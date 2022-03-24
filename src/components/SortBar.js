import React, { useContext, useEffect } from "react";
import { DataContext } from "./AuctionPage";

const SortBar = () => {
  const provider = useContext(DataContext);

  const sortColumn = (e) => {
    e.preventDefault();

    if (e.target.value === "category") {
      if (provider.filteredView) {
        provider.setSearchResult([
          ...provider.searchResult.sort(compareCategory),
        ]);
      } else {
        provider.setProducts([...provider.products.sort(compareCategory)]);
      }
    } else if (e.target.value === "name") {
      if (provider.filteredView) {
        provider.setSearchResult([...provider.searchResult.sort(compareName)]);
      } else {
        provider.setProducts([...provider.products.sort(compareName)]);
      }
    } else if (e.target.value === "description") {
      if (provider.filteredView) {
        provider.setSearchResult([
          ...provider.searchResult.sort(compareDescription),
        ]);
      } else {
        provider.setProducts([...provider.products.sort(compareDescription)]);
      }
    } else if (e.target.value === "price") {
      if (provider.filteredView) {
        provider.setSearchResult([...provider.searchResult.sort(comparePrice)]);
      } else {
        provider.setProducts([...provider.products.sort(comparePrice)]);
      }
    } else if (e.target.value === "buyout") {
      if (provider.filteredView) {
        provider.setSearchResult([
          ...provider.searchResult.sort(compareBuyout),
        ]);
      } else {
        provider.setProducts([...provider.products.sort(compareBuyout)]);
      }
    }
  };

  return (
    <div className="sort-outer-container">
      <button className="image-bar">Image</button>
      <button className="category-bar" onClick={sortColumn} value="category">
        Category
      </button>
      <button className="name-bar" onClick={sortColumn} value="name">
        Name
      </button>
      <button
        className="description-bar"
        onClick={sortColumn}
        value="description"
      >
        Description
      </button>
      <button className="price-bar" onClick={sortColumn} value="price">
        Price
      </button>
      <button className="buyout-bar" onClick={sortColumn} value="buyout">
        Buyout
      </button>
    </div>
  );

  function compareCategory(a, b) {
    if (a.category.toLowerCase() < b.category.toLowerCase()) {
      return -1;
    }
    if (a.category.toLowerCase() > b.category.toLowerCase()) {
      return 1;
    }
    return 0;
  }

  function compareName(a, b) {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }
    return 0;
  }

  function compareDescription(a, b) {
    if (a.description.toLowerCase() < b.description.toLowerCase()) {
      return -1;
    }
    if (a.description.toLowerCase() > b.description.toLowerCase()) {
      return 1;
    }
    return 0;
  }

  function comparePrice(a, b) {
    return a.price - b.price;
  }

  function compareBuyout(a, b) {
    return a.buyout - b.buyout;
  }
};

export default SortBar;
