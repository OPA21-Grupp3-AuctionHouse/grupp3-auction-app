import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import { DataContext } from "./AuctionPage";

function ProductList() {
  const provider = useContext(DataContext);

  const activeProducts = provider.products.filter(
    (product) =>
      product.orderStatus === "Active" && product.ownerId !== provider.user
  );

  if (activeProducts) {
    if (provider.filteredView === false) {
      return (
        <div className="product-container">
          {activeProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              pageSource="bazaar"
            />
          ))}
        </div>
      );
    } else if (
      typeof provider.searchResult === "string" &&
      provider.searchResult !== ""
    ) {
      return (
        <div className="product-container">
          <h2>No results found</h2>
        </div>
      );
    } else {
      return (
        <div className="product-container">
          {provider.searchResult.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              pageSource="bazaar"
            />
          ))}
        </div>
      );
    }
  }
}

export default ProductList;
