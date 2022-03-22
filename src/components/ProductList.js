import React from "react";
import ProductCard from "./ProductCard";

function ProductList({products, searchResult}) {
  if (searchResult.length > 0) {
    return (
      <div className="product-container">
        {searchResult.map((product) => (
          <ProductCard key={product.key} product={product} />
        ))}
      </div>
    );
  } else {
    return (
      <div className="product-container">
        {products.map((product) => (
          <ProductCard key={product.key} product={product} />
        ))}
      </div>
    );
  }
}

export default ProductList;
