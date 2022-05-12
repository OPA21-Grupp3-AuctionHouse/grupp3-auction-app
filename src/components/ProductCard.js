import React, { useState, useEffect, useContext } from "react";
import ProductModal from "./ProductModal";
import { DataContext } from "../components/AuctionPage";
import BidService from "../services/BidService";

const ProductCard = ({ product, pageSource }) => {
  const [modalShow, setModalShow] = useState(false);
  const provider = useContext(DataContext);
  const [currentDate, setCurrentDate] = useState(new Date().getTime());
  const [bids, setBids] = useState([]);
  const [highestBid, setHighestBid] = useState(product.highestBid);
  const [myHighestBid, setMyHighestBid] = useState();
  const [currentBid, setCurrentBid] = useState();

  const loadBids = () => {
    let productBids = provider.bids.filter(
      (bid) => bid.auctionId === product.id
    );

    let bidAmount = productBids.map((bid) => bid.amount);

    setBids(bidAmount);
  };
  const loadHighestBids = () => {
    BidService.getHighestBid(product.id).then((res) => {
      if (res.data.bidAmount) {
        setHighestBid(res.data.bidAmount);
        setCurrentBid(res.data.bidAmount);
      } else {
        setHighestBid(0);
        setCurrentBid(product.price);
      }
    });
  };

  const loadMyHighestBid = () => {
    BidService.getMyHighestBid(product.id, provider.user.id).then((res) => {
      setMyHighestBid(res.data.bidAmount);
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    loadBids();
    setModalShow(true);
  };

  useEffect(() => {
    loadHighestBids();
    loadMyHighestBid();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const msToTime = (s) => {
    const pad = (n, z) => {
      z = z || 2;
      return ("00" + n).slice(-z);
    };
    let ms = s % 1000;
    s = (s - ms) / 1000;
    let secs = s % 60;
    s = (s - secs) / 60;
    let mins = s % 60;
    s = (s - mins) / 60;
    let hrs = s % 24;
    let days = (s - hrs) / 24;
    return (
      pad(days) + "D " + pad(hrs) + "H " + pad(mins) + "M " + pad(secs) + "S"
    );
  };
  if (Date.parse(product.endTime) - currentDate > 0) {
    product.timeRemaining = msToTime(Date.parse(product.endTime) - currentDate);
  } else {
    product.timeRemaining = "0";
  }

  const delAuction = (e) => {
    const toId = e.target.value;
    if (window.confirm("Are you sure?")) {
      const tempTestList = provider.myBidsProducts.filter(
        (product) => product.key !== toId
      );
      provider.setMyBidsProducts(tempTestList);
    }
  };

  if (pageSource === "mybids") {
    return (
      <>
        <div className="product-card" onClick={handleClick}>
          <div className="product-image">
            <img className="Card-image-css" src={product.imageURL}></img>
          </div>
          <div className="mybid-name">{product.name}</div>
          <div className="mybid-endTime">{product.timeRemaining}</div>
          <div className="product-myBid">{myHighestBid}</div>
          <div className="product-myBid">{highestBid}</div>
          <div className="product-myBid">
            {product.buyout}
            <button>BUY</button>
          </div>
        </div>
        <ProductModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          product={product}
          bids={bids}
          highestBid={highestBid}
          setHighestBid={setHighestBid}
          myHighestBid={myHighestBid}
          setMyHighestBid={setMyHighestBid}
          currentBid={currentBid}
          setCurrentBid={setCurrentBid}
        />
      </>
    );
  } else if (pageSource === "myauctions") {
    return (
      <>
        <div className="product-card" onClick={handleClick}>
          <div className="product-image">
            <img className="Card-image-css" src={product.imageURL}></img>
          </div>
          <div className="mybid-name">{product.name}</div>
          <div className="mybid-endTime">{product.timeRemaining}</div>
          <div className="product-myBid">{product.price}</div>
          <div className="product-myBid">{highestBid}</div>
          <div className="product-myBid">
            {product.buyout}
            <button>BUY</button>
          </div>
        </div>
        <ProductModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          product={product}
          bids={bids}
          highestBid={highestBid}
          setHighestBid={setHighestBid}
          currentBid={currentBid}
          setCurrentBid={setCurrentBid}
        />
      </>
    );
  } else {
    return (
      <>
        <div className="product-card" onClick={handleClick}>
          <div className="product-image">image</div>
          <div className="product-category">{product.category}</div>
          <div className="product-name">{product.name}</div>
          <div className="product-description">{product.description}</div>
          <div className="product-time">{product.timeRemaining}</div>
          <div className="product-price">{currentBid}</div>
          <div className="product-buyout">{product.buyout}</div>
        </div>
        <ProductModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          product={product}
          bids={bids}
          highestBid={highestBid}
          setHighestBid={setHighestBid}
          currentBid={currentBid}
          setCurrentBid={setCurrentBid}
        />
      </>
    );
  }
};

export default ProductCard;
