import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState, useContext, useEffect } from "react";
import { ProductContext } from "./ProductCard";

function OrderModal(props) {
  const productProvider = useContext(ProductContext);

  const [delivery, setDelivery] = useState();

  /*const getAllDeliveriesModal = () => {
    DeliveryService.getAllDeliveries().then((res) => {
      console.log(res)
      setDeliveries(res.data.CompanyName)
      console.log(deliveries)
    })
  }*/

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;

    setDelivery(value);
    console.log(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
