import React, { useState } from "react";
import OrderModal from "./OrderModal";

const OrderCard = (props ) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
    <div className="order-card" onClick={() => setModalShow(true)}>
      <div className="order-images">Image</div>
      <div className="order-names">{props.order.Name}</div>
      <div className="order-status">{props.order.Status}</div>
      <div className="order-date">{props.order.Date}</div>
      <div className="order-type">{props.order.Type}</div>
      <div className="order-price">{props.order.Price}</div>
    </div>
      <OrderModal
      show={modalShow}
      onHide={() => setModalShow(false)}
      order={props.order}
      deliveries={props.deliveries}
    />
  </>
  );
};

export default OrderCard;
