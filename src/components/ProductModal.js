import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function ProductModal(props) {
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
          <p>
            Description: {props.product.description}
            <br />
            Price: {props.product.price}
            <br />
            Buyout: {props.product.buyout}
            <br />
            Time Remaining: {props.product.timeRemaining}
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProductModal;
