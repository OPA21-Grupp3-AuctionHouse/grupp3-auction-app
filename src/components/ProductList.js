import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import { DataContext } from "./AuctionPage";

function ProductList() {
  const provider = useContext(DataContext);

  if (provider.filteredView === false) {
    return (
      <div className="product-container">
        {provider.products.map((product) => (
          <ProductCard key={product.key} product={product} />
        ))}
      </div>
    );
  } else if (typeof provider.searchResult === "string" && provider.searchResult !== "") {
    return (
      <div className="product-container">
        <h2>No results found</h2>
      </div>
    );
  } else {
    return (
      <div className="product-container">
        {provider.searchResult.map((product) => (
          <ProductCard key={product.key} product={product} />
        ))}
      </div>
    );
  }
}

export default ProductList;
