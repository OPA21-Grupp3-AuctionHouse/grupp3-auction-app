import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function OrderModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.order.Name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <p>
            Status: {props.order.Status}
            <br />
            Date aquired: {props.order.Date}
            <br />
            Type: {props.order.Type}
            <br />
            Price: {props.order.Price}
            <br />
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default OrderModal;