import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "./ProductCard";
import DeliveryService from "../services/DeliveryService";

function OrderModal(props) {
  const productProvider = useContext(ProductContext);
  const [choosenDelivery, setChoosenDelivery] = useState([]);

  useEffect(() => {
    async function getAuction() {
      DeliveryService.getAuctionById(productProvider.product.id).then((res) => {
        setChoosenDelivery(res.data.deliveryMethod);
      });
    }
    getAuction();
  }, []);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {productProvider.product.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-outer-body">
          <div className="modal-body-left">
            <p>Status: {productProvider.product.orderStatus}</p>
            <br />
            <p>Date aquired: {productProvider.datetime}</p>
            <br />
            <p>Your price: {productProvider.highestBid}</p>
            <p>Description: {productProvider.product.description}</p>
            <br />
            <p>
              Delivery adress: {productProvider.address[0]},{" "}
              {productProvider.address[1]} {productProvider.address[2]}.
            </p>
            {choosenDelivery ? (
              <p>Delivery method: {choosenDelivery}</p>
            ) : (
              <p>Delivery method:</p>
            )}
            <br />
            <div className="input-group mb-3"></div>
          </div>
          <div className="modal-body-right">
            {productProvider.product.image ? (
              <img
                className="Modal-image-css"
                src={`http://146.190.18.26:8000/api/download/${productProvider.product.image}`}
                alt="jaja"
              ></img>
            ) : (
              <></>
            )}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default OrderModal;
