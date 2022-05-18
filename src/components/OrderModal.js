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
        <div>
          <div>
            Status: {productProvider.product.orderStatus}
            <br />
            Date aquired: {productProvider.product.endTime}
            <br />
            {/*             Type: {props.product.Type}
            <br /> */}
            Price: {productProvider.product.price}
            <br />
            <div className="input-group mb-3"></div>
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
