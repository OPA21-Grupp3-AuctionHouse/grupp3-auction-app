import React, { useContext, useState } from "react";
//import OrderCard from "./OrderCard";
import { DataContext } from "./AuctionPage";
import ProductCard from "./ProductCard";
import BidService from "../services/BidService";
import { ThemeProvider } from "react-bootstrap";

function OrderList() {
  const provider = useContext(DataContext);

  const myBoughtHistory = provider.products.filter(
    (product) =>
      product.orderStatus === "In transit" && product.winner === provider.user
  );

  return (
    <div className="order-container">
      {myBoughtHistory.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          address={provider.address}
          pageSource="myhistory"
        />
      ))}
    </div>
  );
}

export default OrderList;
