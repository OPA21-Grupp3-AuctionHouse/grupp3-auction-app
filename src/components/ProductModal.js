import React, { useState, useContext } from "react";
import { DataContext } from "./AuctionPage";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import BidService from "../services/BidService";
import ProductService from "../services/ProductService";

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
    if (input < props.currentBid + 5) {
      alert("Bid too low!");
    } else {
      const newBid = {
        userId: provider.user,
        auctionId: props.product.id,
        bidTime: new Date(),
        bidAmount: input,
      };

      createBid(newBid);
      provider.setBids([...provider.bids, newBid]);
      console.log(provider.bids);
    }
  };

  const handleBuyout = (e) => {
    e.preventDefault();
    props.product.orderStatus = "Completed";
    props.product.winner = provider.user;
    console.log(props.product);
    ProductService.updateProduct(props.product);
    const newBid = {
      userId: provider.user,
      auctionId: props.product.id,
      bidTime: new Date(),
      bidAmount: props.product.buyout,
    };

    createBid(newBid);
    provider.setBids([...provider.bids, newBid]);
    props.onHide();
  };

  const createBid = (newBid) => {
    BidService.createBid(newBid).then((res) => {
      props.setHighestBid(newBid.bidAmount);
      props.setMyHighestBid(newBid.bidAmount);
      props.setCurrentBid(newBid.bidAmount);
    });
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
            {props.highestBid ? (
              <span>{props.highestBid}</span>
            ) : (
              <span>no bids</span>
            )}
            <br />
            My bid:{" "}
            {props.myHighestBid ? (
              <span>{props.myHighestBid}</span>
            ) : (
              <span>no bid</span>
            )}
          </p>
          <form className="modal-bid-form" onSubmit={checkBid}>
            {!props.pageSource ? (
              <label>
                Place your bid{" "}
                <input
                  type="number"
                  min={props.currentBid}
                  max={props.product.buyout}
                  //placeholder="Bid..."
                  name="bid"
                  onChange={handleChange}
                  value={input}
                />
                <button type="submit">BID</button>
              </label>
            ) : (
              <></>
            )}
          </form>
          {!props.pageSource ? (
            <>
              <br />
              <label>
                Buyout price: {props.product.buyout}{" "}
                <button onClick={handleBuyout}>BUYOUT</button>
              </label>
            </>
          ) : (
            <></>
          )}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProductModal;
