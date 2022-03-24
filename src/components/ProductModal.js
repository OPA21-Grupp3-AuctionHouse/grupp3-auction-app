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
          <p className="modal-description">
            Description: {props.product.description}
          </p>
          <p className="modal-time">
            Time remaining:{" "}
            <span style={{ color: "red" }}>{props.product.timeRemaining}</span>
          </p>
          <p>
            Starting price: {props.product.price}
            <br />
            Highest bid:{" "}
            {props.bids.length !== 0 ? (
              <span>{Math.max(...props.bids)}</span>
            ) : (
              <span>No bids</span>
            )}
          </p>
          <form className="modal-bid-form">
            <label>
              Place your bid{" "}
              <input
                type="text"
                //placeholder="Bid..."
                name="bid"
                //onChange={}
                //value={}
              />
              <button type="submit">BID</button>
            </label>
          </form>
          <br />
          <label>
            Buyout price: {props.product.buyout} <button>BUYOUT</button>
          </label>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProductModal;
