import React, { useContext,useState } from "react";
//import OrderCard from "./OrderCard";
import { DataContext } from "./AuctionPage";
import ProductCard from "./ProductCard";
import BidService from "../services/BidService";
import { ThemeProvider } from "react-bootstrap";

function OrderList() {
  const provider = useContext(DataContext);

  const userAuctionList = provider.products.filter(
    (product) => Date.parse(product.endTime) < Date.now() 
  )

  return (
    <div className="order-container">
      {userAuctionList.map((product) => (
        <ProductCard key={product.id} product={product} pageSource = "myhistory" deliveries={provider.deliveries}/>
      ))}
    </div>
  );
}

export default OrderList;
