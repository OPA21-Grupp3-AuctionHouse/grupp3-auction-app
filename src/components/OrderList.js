import React, { useContext } from "react";
import OrderCard from "./OrderCard";
import { DataContext } from "./AuctionPage";

function OrderList() {
  const OrderData = useContext(DataContext);
  return (
    <div className="order-container">
      {OrderData.orderProducts.map((order) => (
        <OrderCard key={order.key} order={order} />
      ))}
    </div>
  );
}

export default OrderList;
