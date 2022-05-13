import React, { useContext } from "react";
//import OrderCard from "./OrderCard";
import { DataContext } from "./AuctionPage";
import ProductCard from "./ProductCard";

function OrderList() {
  const provider = useContext(DataContext);
  return (
    <div className="order-container">
      {provider.products.map((product) => (
        <ProductCard key={product.id} product={product} pageSource = "myhistory"/>
      ))}
    </div>
  );
}

export default OrderList;
