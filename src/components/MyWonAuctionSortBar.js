import { React, useContext } from "react";
import { DataContext } from "./AuctionPage";

const MyBidsSortBar = () => {
  const provider = useContext(DataContext);

  const sortColumn = (e) => {
    e.preventDefault();

    if (e.target.value === "timeRemaining") {
      if (provider.filteredView) {
        provider.setSearchResult([
          ...provider.searchResult.sort(compareTimeRemaining),
        ]);
      } else {
        provider.setProducts([...provider.products.sort(compareTimeRemaining)]);
      }
    } else if (e.target.value === "name") {
      if (provider.filteredView) {
        provider.setSearchResult([...provider.searchResult.sort(compareName)]);
      } else {
        provider.setProducts([...provider.products.sort(compareName)]);
      }
    }
  };

  return (
    <div className="sort-outer-container">
      <button className="my-bid-image-bar">Image</button>
      <button className="my-bid-name-bar" onClick={sortColumn} value="name">
        Name
      </button>
      <button className="my-bid-name-bar" onClick={sortColumn} value="name">
        Description
      </button>
      <button
        className="my-bid-endtime-bar"
        onClick={sortColumn}
        value="timeRemaining"
      >
        Next Action
      </button>
      <button className="my-bid-price-bar" onClick={sortColumn} value="myBid">
        Your bid
      </button>
    </div>
  );

  function compareTimeRemaining(a, b) {
    if (a.endTime < b.endTime) {
      return -1;
    }
    if (a.endTime > b.endTime) {
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

  function compareMyBid(a, b) {
    return a.myBid - b.myBid;
  }

  function compareHighestBid(a, b) {
    return a.price - b.price;
  }

  function compareBuyout(a, b) {
    return a.buyout - b.buyout;
  }
};

export default MyBidsSortBar;
