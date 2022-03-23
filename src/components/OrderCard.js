import React from "react";

const OrderCard = ({ order }) => {
  return (
    <div className="order-card">
      <div className="order-images">Image</div>
      <div className="order-names">{order.Name}</div>
      <div className="order-status">{order.Status}</div>
      <div className="order-date">{order.Date}</div>
      <div className="order-price">{order.Price}</div>
    </div>
  );
};

export default OrderCard;
