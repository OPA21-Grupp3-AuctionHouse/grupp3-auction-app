import React from "react";

const MyBidsCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image">image</div>
      <div className="product-name">{product.name}</div>
      <div className="product-endTime">{product.endTime}</div>
      <div className="product-myBid">{product.myBid}</div>
      <div className="product-myBid">{product.highestBid}</div>
      <div className="product-myBid">{product.buyout}</div>
    </div>
  );
};

export default MyBidsCard;
