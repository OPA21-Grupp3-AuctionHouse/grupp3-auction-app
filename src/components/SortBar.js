import React, { useContext } from "react";
import { DataContext } from "./AuctionPage";

const SortBar = () => {
  const provider = useContext(DataContext);

  const sortColumn = (e) => {
    e.preventDefault();

    if (e.target.value === "category") {
      provider.setSearchResult([
        ...provider.searchResult.sort(compareCategory),
      ]);
      provider.setProducts([...provider.products.sort(compareCategory)]);
    } else if (e.target.value === "name") {
      provider.setSearchResult([...provider.searchResult.sort(compareName)]);
      provider.setProducts([...provider.products.sort(compareName)]);
    } else if (e.target.value === "description") {
      provider.setSearchResult([
        ...provider.searchResult.sort(compareDescription),
      ]);
      provider.setProducts([...provider.products.sort(compareDescription)]);
    } else if (e.target.value === "time") {
      provider.setSearchResult([...provider.searchResult.sort(compareTime)]);
      provider.setProducts([...provider.products.sort(compareTime)]);
    } else if (e.target.value === "price") {
      provider.setSearchResult([...provider.searchResult.sort(comparePrice)]);
      provider.setProducts([...provider.products.sort(comparePrice)]);
    } else if (e.target.value === "buyout") {
      provider.setSearchResult([...provider.searchResult.sort(compareBuyout)]);
      provider.setProducts([...provider.products.sort(compareBuyout)]);
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
      <button className="time-bar" onClick={sortColumn} value="time">
        End Time
      </button>
      <button className="price-bar" onClick={sortColumn} value="price">
        Current Price
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

  function compareTime(a, b) {
    return new Date(a.endTime) - new Date(b.endTime);
  }

  function comparePrice(a, b) {
    return a.price - b.price;
  }

  function compareBuyout(a, b) {
    return a.buyout - b.buyout;
  }
};

export default SortBar;
