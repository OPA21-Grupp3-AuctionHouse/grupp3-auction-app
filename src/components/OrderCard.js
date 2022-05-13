/*import React, { useState } from "react";
import OrderModal from "./OrderModal";

const OrderCard = ({ product }) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
    <div className="order-card" onClick={() => setModalShow(true)}>
      <div className="order-images">Image</div>
      <div className="order-names">{product.name}</div>
      <div className="order-status">{product.status}</div>
      <div className="order-date">{product.date}</div>
      <div className="order-type">{product.type}</div>
      <div className="order-price">{product.rice}</div>
    </div>
      <OrderModal
      show={modalShow}
      onHide={() => setModalShow(false)}
      product={product}
    />
  </>
  );
};

export default OrderCard;
*/