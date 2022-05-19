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
        <div className="modal-outer-body">
          <div className="modal-body-left">
            Status: {productProvider.product.orderStatus}
            <br />
            Date aquired: {productProvider.datetime}
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
            Price: {productProvider.highestBid}
            <br />
            <div className="input-group mb-3"></div>
          </div>
          <div className="modal-body-right">
            {productProvider.product.image ? (
              <img
                className="Modal-image-css"
                src={`http://localhost:8080/api/download/${productProvider.product.image}`}
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
