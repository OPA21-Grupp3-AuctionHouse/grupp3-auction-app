
import React from "react";
import OrderCard from "./OrderCard";
import OrderData from"./data/OrderData.json";

function OrderList() {
  return (
    <div className="order-container">
      {OrderData.map((order) => (
        <OrderCard key={order.key} order={order} />
      ))}
    </div>
  );
}

export default OrderList;