import React, { useState, useContext } from "react";
import { DataContext } from "./AuctionPage";
import { ProductContext } from "./ProductCard";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import BidService from "../services/BidService";
import ProductService from "../services/ProductService";
import DeliveryService from "../services/DeliveryService";

function ProductModal(props) {
  const provider = useContext(DataContext);
  const productProvider = useContext(ProductContext);

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
    if (delivery) {
      setFinished(true);
      DeliveryService.postAuction({
        auctionId: productProvider.product.id,
        userId: provider.user,
        deliveryMethod: delivery,
        address: provider.address[0]
      });
      productProvider.product.orderStatus = "In transit";
      ProductService.updateProduct(productProvider.product);
    } else {
      alert("Choose a shipping method!");
    }
  };

  const checkBid = (e) => {
    e.preventDefault();
    //Se till så att budet är högre än tidigare högsta bud, och att det är ett giltigt heltal
    //props.placeBid()
    if (input < productProvider.currentBid + 5) {
      alert("Bid too low!");
    } else {
      const newBid = {
        userId: provider.user,
        auctionId: productProvider.product.id,
        bidTime: new Date(),
        bidAmount: input,
      };
      if (
        Date.parse(productProvider.product.endTime) - new Date().getTime() <
        300000
      ) {
        let newEndTime = new Date(new Date().getTime() + 300000);
        productProvider.product.endTime = newEndTime;
        ProductService.updateProduct(productProvider.product);
      }
      createBid(newBid);
      provider.setBids([...provider.bids, newBid]);
      console.log(provider.bids);
    }
  };

  const handleBuyout = (e) => {
    e.preventDefault();
    productProvider.product.orderStatus = "Completed";
    productProvider.product.winner = provider.user;
    productProvider.product.endTime = "Auction over";
    console.log(productProvider.product);
    ProductService.updateProduct(productProvider.product);
    const newBid = {
      userId: provider.user,
      auctionId: productProvider.product.id,
      bidTime: new Date(),
      bidAmount: productProvider.product.buyout,
    };

    createBid(newBid);
    provider.setBids([...provider.bids, newBid]);
    props.onHide();
  };

  const createBid = (newBid) => {
    BidService.createBid(newBid).then((res) => {
      productProvider.setHighestBid(newBid.bidAmount);
      productProvider.setMyHighestBid(newBid.bidAmount);
      productProvider.setCurrentBid(newBid.bidAmount);
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
          {productProvider.product.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-outer-body">
          <div className="modal-body-left">
            <p className="modal-description">
              Description: {productProvider.product.description}
            </p>
            <p className="modal-time">
              Time remaining:{" "}
              <span style={{ color: "red" }}>
                {productProvider.product.timeRemaining}
              </span>
            </p>
            <p>
              Starting price: {productProvider.product.price}
              <br />
              Highest bid:{" "}
              {productProvider.highestBid ? (
                <span>{productProvider.highestBid}</span>
              ) : (
                <span>no bids</span>
              )}
              <br />
              My bid:{" "}
              {productProvider.myHighestBid ? (
                <span>{productProvider.myHighestBid}</span>
              ) : (
                <span>no bid</span>
              )}
            </p>
            {!productProvider.pageSource &&
            productProvider.product.ownerId !== provider.user ? (
              <>
                <form className="modal-bid-form" onSubmit={checkBid}>
                  <label>
                    Place your bid{" "}
                    <input
                      type="number"
                      min={productProvider.currentBid}
                      max={productProvider.product.buyout}
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
                  Buyout price: {productProvider.product.buyout}{" "}
                  <button onClick={handleBuyout}>BUYOUT</button>
                </label>
              </>
            ) : productProvider.pageSource === "mywonauctions" && !finished ? (
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
                    {productProvider.deliveries?.map((object, i) => {
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
          {finished ? (
            <div>
              <p>
                You have chosen {delivery} delivery.
                <br />
                Your package will be delivered to {
                  productProvider.address[0]
                }, {productProvider.address[1]} {productProvider.address[2]}.
              </p>
            </div>
          ) : (
            <></>
          )}
        </div>
      </Modal.Body>
      <Modal.Footer>
        {productProvider.pageSource === "mywonauctions" && !finished ? (
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
