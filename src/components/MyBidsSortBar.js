import React from "react";

const MyBidsSortBar = () => {
  const sortColumn = () => {
    console.log("hej");
  };

  return (
    <div className="sort-outer-container">
      <button className="image-bar">Image</button>
      <button className="name-bar" onClick={sortColumn} value="name">
        Name
      </button>
      <button className="description-bar" onClick={sortColumn} value="endTime">
        End time
      </button>
      <button className="myBid-price-bar" onClick={sortColumn} value="price">
        Your bid
      </button>
      <button className="myBid-price-bar" onClick={sortColumn} value="price">
        Highest bid
      </button>
      <button className="myBid-price-bar" onClick={sortColumn} value="buyout">
        Buyout
      </button>
    </div>
  );
};

export default MyBidsSortBar;
