import React, { useState, useContext } from "react";
import { DataContext } from "./AuctionPage";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import BidService from "../services/BidService";
import ProductService from "../services/ProductService";
import DeliveryService from "../services/DeliveryService";

function ProductModal(props) {
  const provider = useContext(DataContext);

  const [input, setInput] = useState(0);
  const [delivery, setDelivery] = useState();
  const [finished, setFinished] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const handleDeliveryChange = (e) => {
    e.preventDefault();
    setDelivery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFinished(true);
    DeliveryService.postAuction({
      auctionId: props.product.id,
      userId: provider.user,
      deliveryMethod: delivery,
    });
    props.product.orderStatus = "In transit";
    ProductService.updateProduct(props.product);
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
    props.product.endTime = "Auction over";
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
          {!props.pageSource ? (
            <>
              <form className="modal-bid-form" onSubmit={checkBid}>
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
              </form>
              <br />
              <label>
                Buyout price: {props.product.buyout}{" "}
                <button onClick={handleBuyout}>BUYOUT</button>
              </label>
            </>
          ) : props.pageSource === "mywonauctions" ? (
            <form className="modal-delivery-form">
              <div className="input-group mb-3">
                <label
                  className="input-group-text"
                  htmlFor="inputGroupSelect01"
                >
                  Delivery Options:
                </label>
                <select
                  onChange={handleDeliveryChange}
                  className="form-select"
                  id="delivery"
                  name="delivery"
                >
                  <option>Choose...</option>
                  {props.deliveries?.map((object, i) => {
                    return (
                      <option key={i} value={object.deliveryMethod}>
                        {object.deliveryMethod} - {object.deliveryTime} days
                        delivery time - Price: {object.price}:-
                      </option>
                    );
                  })}
                </select>
              </div>
            </form>
          ) : (
            <></>
          )}

          {/*
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
              <>
                {props.pageSource === "mywonauctions" ? (
                  <div className="input-group mb-3">
                    <label
                      className="input-group-text"
                      htmlFor="inputGroupSelect01"
                    >
                      Delivery Options:
                    </label>
                    <select
                      onChange={handleChange}
                      className="form-select"
                      id="endTime"
                      name="endTime"
                    >
                      <option>Choose...</option>
                      {props.deliveries?.map((object, i) => {
                        return (
                          <option key={i} value={object.deliveryMethod}>
                            {object.deliveryMethod}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                ) : (
                  <></>
                )}
              </>
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
          */}
        </div>
        {finished ? (
          <div>
            <p>
              You have chosen {delivery} delivery.
              <br />
              Your package will be delivered to {props.address[0]},{" "}
              {props.address[1]} {props.address[2]}.
            </p>
          </div>
        ) : (
          <></>
        )}
      </Modal.Body>
      <Modal.Footer>
        {props.pageSource === "mywonauctions" ? (
          <Button onClick={handleSubmit}>Choose this delivery method</Button>
        ) : (
          <></>
        )}
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProductModal;
