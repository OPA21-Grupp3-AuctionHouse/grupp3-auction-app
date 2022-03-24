import React, { useState } from "react";
import OrderModal from "./OrderModal";

const OrderCard = ({ order }) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
    <div className="order-card" onClick={() => setModalShow(true)}>
      <div className="order-images">Image</div>
      <div className="order-names">{order.Name}</div>
      <div className="order-status">{order.Status}</div>
      <div className="order-date">{order.Date}</div>
      <div className="order-type">{order.Type}</div>
      <div className="order-price">{order.Price}</div>
    </div>
      <OrderModal
      show={modalShow}
      onHide={() => setModalShow(false)}
      order={order}
    />
  </>
  );
};

export default OrderCard;
