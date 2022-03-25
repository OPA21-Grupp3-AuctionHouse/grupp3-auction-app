import { React, useContext } from "react";
import { DataContext } from "./AuctionPage";

const MyAuctionsBar = () => {
  const provider = useContext(DataContext);

  const sortColumn = (e) => {
    e.preventDefault();

    if (e.target.value === "timeRemaining") {
      if (provider.filteredView) {
        provider.setSearchResult([
          ...provider.searchResult.sort(compareTimeRemaining),
        ]);
      } else {
        provider.setMyBidsProducts([
          ...provider.myBidsProducts.sort(compareTimeRemaining),
        ]);
      }
    } else if (e.target.value === "name") {
      if (provider.filteredView) {
        provider.setSearchResult([...provider.searchResult.sort(compareName)]);
      } else {
        provider.setMyBidsProducts([
          ...provider.myBidsProducts.sort(compareName),
        ]);
      }
    } else if (e.target.value === "startPrice") {
      if (provider.filteredView) {
        provider.setSearchResult([...provider.searchResult.sort(compareMyBid)]);
      } else {
        provider.setMyBidsProducts([
          ...provider.myBidsProducts.sort(compareMyBid),
        ]);
      }
    } else if (e.target.value === "highestBid") {
      if (provider.filteredView) {
        provider.setSearchResult([
          ...provider.searchResult.sort(compareHighestBid),
        ]);
      } else {
        provider.setMyBidsProducts([
          ...provider.myBidsProducts.sort(compareHighestBid),
        ]);
      }
    } else if (e.target.value === "buyout") {
      if (provider.filteredView) {
        provider.setSearchResult([
          ...provider.searchResult.sort(compareBuyout),
        ]);
      } else {
        provider.setMyBidsProducts([
          ...provider.myBidsProducts.sort(compareBuyout),
        ]);
      }
    }
  };

  return (
    <div className="sort-outer-container">
      <button className="image-bar">Image</button>
      <button className="my-auction-bar" onClick={sortColumn} value="name">
        Name
      </button>
      <button
        className="my-auction-bar"
        onClick={sortColumn}
        value="timeRemaining"
      >
        Time Remaining
      </button>
      <button
        className="my-auction-price-bar"
        onClick={sortColumn}
        value="startPrice"
      >
        Start price
      </button>
      <button
        className="my-auction-price-bar"
        onClick={sortColumn}
        value="highestBid"
      >
        Highest bid
      </button>
      <button
        className="my-auction-price-bar"
        onClick={sortColumn}
        value="buyout"
      >
        Buyout
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
    return a.startPrice - b.startPrice;
  }

  function compareHighestBid(a, b) {
    return a.highestBid - b.highestBid;
  }

  function compareBuyout(a, b) {
    return a.buyout - b.buyout;
  }
};

export default MyAuctionsBar;
