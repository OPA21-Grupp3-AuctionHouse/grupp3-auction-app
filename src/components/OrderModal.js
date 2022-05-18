import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { DataContext } from "./AuctionPage";


function OrderModal(props) {
 const provider = useContext(DataContext);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.product.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <div>
          Status: {props.product.orderStatus}
            <br />            
            <br />
            Your price: {props.product.price}
            <br />
            Buyout was {props.product.buyout} 
            <br /> 
            <br />
            Date aquired: {props.product.endTime}
            <br />
{/*             Type: {props.product.Type}
            <br /> */}
            Description: {props.product.description}
            <br />
            <br />
            Delivery address: {provider.address[0]}, {""} {provider.address[1]} {provider.address[2]}
            <br />
            Delivery method used: 
            <br /> 
            <br />
            Regret purchase? Well too bad, NO REFUNDS
            <br />
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