import React, { useState, useContext } from "react";
import { DataContext } from "./AuctionPage";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { v4 as uuidv4 } from 'uuid';

function ProductModal(props) {
  const provider = useContext(DataContext);

  const [input, setInput] = useState(0);

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const checkBid = (e) => {
    e.preventDefault();
    //Se till så att budet är högre än tidigare högsta bud, och att det är ett giltigt heltal
    //props.placeBid()
    if (input < Math.max(...props.bids) + 10) {
      console.log("Bid too low.")
    } else {
      const newBid = {
        "id": uuidv4(),
        "userId": 5,
        "auctionId": props.product.key,
        "dateTime": "2022-03-25 10:30",
        "amount": input
      }

      provider.setBids([...provider.bids, newBid])
      console.log(provider.bids)
    }
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
          <form className="modal-bid-form" onSubmit={checkBid}>
            <label>
              Place your bid{" "}
              <input
                type="number"
                min={Math.max(...props.bids) + 10}
                //placeholder="Bid..."
                name="bid"
                onChange={handleChange}
                value={input}
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
