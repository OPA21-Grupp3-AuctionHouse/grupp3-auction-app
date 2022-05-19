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
      console.log(productProvider.product.id);
      DeliveryService.getAuctionById(productProvider.product.id).then((res) => {
        console.log(res.data);
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
        <div>
          <div>
            <p>Status: {productProvider.product.orderStatus}</p>
            <br />
            <p>Your price: {productProvider.product.price}</p>
            <p>Buyout was {productProvider.product.buyout}</p>
            <br />
            <p>Date aquired: {productProvider.product.endTime}</p>
            <br />
            <p>Description: {productProvider.product.description}</p>
            <br />
            <p>Delivery adress: {productProvider.address[0]
              }, {productProvider.address[1]} {productProvider.address[2]}.</p>
            {choosenDelivery ? <p>Delivery method: {choosenDelivery}</p> : <p>Delivery method:</p>}

            {/*             Type: {props.product.Type}
            <br /> */}
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
