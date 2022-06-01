import React, { useContext, useState } from "react";
import { DataContext } from "./AuctionPage";

const SortBar = () => {
  const provider = useContext(DataContext);
  const [az, setAz] = useState(false);

  const sortColumn = (e) => {
    e.preventDefault();

    if (e.target.value === "category") {
      provider.setSearchResult([
        ...provider.searchResult.sort(compareCategory),
      ]);
      if (az) {
        provider.setProducts([...provider.products.sort(compareCategory)]);
        setAz(false);
      } else {
        provider.setProducts([...provider.products.sort(compareCategory2)]);
        setAz(true);
      }
    } else if (e.target.value === "name") {
      provider.setSearchResult([...provider.searchResult.sort(compareName)]);
      if (az) {
        provider.setProducts([...provider.products.sort(compareName)]);
        setAz(false);
      } else {
        provider.setProducts([...provider.products.sort(compareName2)]);
        setAz(true);
      }
    } else if (e.target.value === "description") {
      provider.setSearchResult([
        ...provider.searchResult.sort(compareDescription),
      ]);
      if (az) {
        provider.setProducts([...provider.products.sort(compareDescription)]);
        setAz(false);
      } else {
        provider.setProducts([...provider.products.sort(compareDescription2)]);
        setAz(true);
      }
    } else if (e.target.value === "time") {
      provider.setSearchResult([...provider.searchResult.sort(compareTime)]);

      if (az) {
        provider.setProducts([...provider.products.sort(compareTime)]);
        setAz(false);
      } else {
        provider.setProducts([...provider.products.sort(compareTime2)]);
        setAz(true);
      }
    } else if (e.target.value === "price") {
      console.log(provider.products);
      provider.setSearchResult([...provider.searchResult.sort(comparePrice)]);
      if (az) {
        provider.setProducts([...provider.products.sort(comparePrice)]);
        setAz(false);
      } else {
        provider.setProducts([...provider.products.sort(comparePrice2)]);
        setAz(true);
      }
    } else if (e.target.value === "buyout") {
      provider.setSearchResult([...provider.searchResult.sort(compareBuyout)]);
      if (az) {
        provider.setProducts([...provider.products.sort(compareBuyout)]);
        setAz(false);
      } else {
        provider.setProducts([...provider.products.sort(compareBuyout2)]);
        setAz(true);
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

  function compareCategory2(a, b) {
    if (a.category.toLowerCase() < b.category.toLowerCase()) {
      return 1;
    }
    if (a.category.toLowerCase() > b.category.toLowerCase()) {
      return -1;
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
  function compareName2(a, b) {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return 1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return -1;
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
  function compareDescription2(a, b) {
    if (a.description.toLowerCase() < b.description.toLowerCase()) {
      return 1;
    }
    if (a.description.toLowerCase() > b.description.toLowerCase()) {
      return -1;
    }
    return 0;
  }
  function compareTime(a, b) {
    console.log(a.endTime);
    console.log(b.endTime);
    return Date.parse(a.endTime) - Date.parse(b.endTime);
  }
  function compareTime2(a, b) {
    return Date.parse(b.endTime) - Date.parse(a.endTime);
  }
  function comparePrice(a, b) {
    console.log(a);
    console.log(b);
    return a.highestBid - b.highestBid;
  }
  function comparePrice2(a, b) {
    return b.highestBid - a.highestBid;
  }
  function compareBuyout(a, b) {
    return a.buyout - b.buyout;
  }
  function compareBuyout2(a, b) {
    return b.buyout - a.buyout;
  }
};

export default SortBar;
