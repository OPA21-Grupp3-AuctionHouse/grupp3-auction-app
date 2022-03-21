import React from "react";
import ProductCard from "./ProductCard";
import products from "./data/products.json";

function ProductList() {
  return (
    <div className="product-container">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
}

export default ProductList;

/*
key={product.key}
          productImage={product.image}
          productName={product.name}
          productDescription={product.description}
          productPrice={product.price}
          productBuyout={product.buyout}
*/
