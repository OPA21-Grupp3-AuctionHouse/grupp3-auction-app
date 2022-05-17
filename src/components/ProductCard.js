import React, { useState, useEffect, useContext } from "react";
import ProductModal from "./ProductModal";
import { DataContext } from "../components/AuctionPage";
import BidService from "../services/BidService";
import ProductService from "../services/ProductService";

const ProductCard = ({ product, pageSource }) => {
  const [modalShow, setModalShow] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date().getTime());
  const [bids, setBids] = useState([]);
  const [highestBid, setHighestBid] = useState();
  const [myHighestBid, setMyHighestBid] = useState();
  const [currentBid, setCurrentBid] = useState();
  const provider = useContext(DataContext);

  const loadBids = () => {
    let productBids = provider.bids.filter(
      (bid) => bid.auctionId === product.id
    );

    let bidAmount = productBids.map((bid) => bid.bidAmount);

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
    BidService.getMyHighestBid(product.id, provider.user).then((res) => {
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
  }, [bids]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date().getTime());

      if (
        Date.parse(product.endTime) < Date.now() &&
        product.orderStatus === "Active"
      ) {
        product.orderStatus = "Completed";
        BidService.getHighestBid(product.id).then((res) => {
          if (res.data) {
            product.winner = res.data.userId;
          }
        });
        console.log(product);
        ProductService.updateProduct(product);
      }
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
    product.timeRemaining = "Auction ended";
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
          <div className="my-bid-image">
            <img
              className="Card-image-css"
              src={product.imageURL}
              alt="jaja"
            ></img>
          </div>
          <div className="my-bid-name">{product.name}</div>
          <div className="my-bid-endtime">{product.timeRemaining}</div>
          <div className="my-bid-price">{myHighestBid}</div>
          <div className="my-bid-price">{highestBid}</div>
          <div className="my-bid-price">{product.buyout}</div>
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
          <div className="my-auction-image">
            <img
              className="Card-image-css"
              src={product.imageURL}
              alt="jaja"
            ></img>
          </div>
          <div className="my-auction-name">{product.name}</div>
          <div className="my-auction-endtime">{product.timeRemaining}</div>
          <div className="my-auction-price">{product.price}</div>
          <div className="my-auction-price">{highestBid}</div>
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
          pageSource={pageSource}
        />
      </>
    );
  } else if (pageSource === "mywonauctions") {
    return (
      <>
        <div className="product-card" onClick={handleClick}>
          <div className="my-auction-image">
            <img
              className="Card-image-css"
              src={product.imageURL}
              alt="jaja"
            ></img>
          </div>
          <div className="my-auction-name">{product.name}</div>
          <div className="my-auction-endtime">Choose a shipping method</div>

          <div className="my-auction-price">Price paid: {myHighestBid}</div>
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
          pageSource={pageSource}
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
          setMyHighestBid={setMyHighestBid}
          currentBid={currentBid}
          myHighestBid={myHighestBid}
          setCurrentBid={setCurrentBid}
        />
      </>
    );
  }
};

export default ProductCard;
