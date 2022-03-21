import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image">image</div>
      <div className="product-category">{product.category}</div>
      <div className="product-name">{product.name}</div>
      <div className="product-description">{product.description}</div>
      <div className="product-price">{product.price}</div>
      <div className="product-buyout">{product.buyout}</div>
    </div>
  );
};

export default ProductCard;
