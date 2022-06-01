import React, { useState, useEffect, createContext, useContext } from "react";
import ProductModal from "./ProductModal";
import { DataContext } from "../components/AuctionPage";
import BidService from "../services/BidService";
import OrderModal from "./OrderModal";
import ProductService from "../services/ProductService";
import DeliveryService from "../services/DeliveryService";

export const ProductContext = createContext();

const ProductCard = ({ product, pageSource, address, deliveries }) => {
  const [modalShow, setModalShow] = useState(false);
  //const [currentDate, setCurrentDate] = useState(new Date().getTime());
  const [currentDate, setCurrentDate] = useState(new Date().getTime());
  const [bids, setBids] = useState([]);
  const [highestBid, setHighestBid] = useState();
  const [myHighestBid, setMyHighestBid] = useState();
  const [currentBid, setCurrentBid] = useState();
  const [datetime, setDatetime] = useState();

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
        setCurrentBid(0);
      }
    });
  };

  useEffect(() => {
    if (pageSource === "myhistory") {
      getTime();
    }
  }, []);

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
    getFinishedAuctionTime();
    loadMyHighestBid();
    loadHighestBids();
  }, [bids]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date().getTime());
      loadHighestBids();
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
        product.endTime = "Auction over";
        console.log(product);
        ProductService.updateProduct(product).then((res) =>
          ProductService.getProducts().then((res) => {
            provider.setProducts(res.data);
          })
        );
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

  const getFinishedAuctionTime = () => {
    /*
    DeliveryService.getAllAuctions().then((res) => {
      console.log(res.data);
      const currntAuctionTime = res.data.filter(
        (auction) => auction.auctionId === product.id
      );
    
      //setDatetime(currntAuctionTime[0].date);
    });
    */
    DeliveryService.getAuctionById(product.id).then((res) => {
      setDatetime(res.data.date);
    });
  };

  const getTime = () => {
    DeliveryService.getAllAuctions().then((res) => {
      const currntAuctionTime = res.data.filter(
        (auction) => auction.auctionId === product.id
      );
      if (currntAuctionTime === 0) {
        console.log(currntAuctionTime);
        setDatetime(
          currntAuctionTime[0].date.slice(0, 10) +
            " " +
            currntAuctionTime[0].date.slice(11, 19)
        );
      }
    });
  };

  if (pageSource === "mybids") {
    return (
      <ProductContext.Provider
        value={{
          product,
          bids,
          highestBid,
          setHighestBid,
          myHighestBid,
          setMyHighestBid,
          currentBid,
          setCurrentBid,
        }}
      >
        <>
          <div className="product-card" onClick={handleClick}>
            <div className="my-bid-image">
              {product.image ? (
                <img
                  className="Card-image-css"
                  src={`http://146.190.18.26:8000/api/download/${product.image}`}
                  alt="no pic"
                ></img>
              ) : (
                <></>
              )}
            </div>
            <div className="my-bid-name">{product.name}</div>
            <div className="my-bid-endtime">{product.timeRemaining}</div>
            <div className="my-bid-price">{myHighestBid}</div>
            <div className="my-bid-price">{highestBid}</div>
            <div className="my-bid-price">{product.buyout}</div>
          </div>
          <ProductModal show={modalShow} onHide={() => setModalShow(false)} />
        </>
      </ProductContext.Provider>
    );
  } else if (pageSource === "myauctions") {
    return (
      <ProductContext.Provider
        value={{
          product,
          bids,
          highestBid,
          setHighestBid,
          myHighestBid,
          setMyHighestBid,
          currentBid,
          setCurrentBid,
          pageSource,
        }}
      >
        <>
          <div className="product-card" onClick={handleClick}>
            <div className="my-auction-image">
              {product.image ? (
                <img
                  className="Card-image-css"
                  src={`http://146.190.18.26:8000/api/download/${product.image}`}
                  alt="no pic"
                ></img>
              ) : (
                <></>
              )}
            </div>
            <div className="my-auction-name">{product.name}</div>
            <div className="my-auction-endtime">{product.timeRemaining}</div>
            <div className="my-auction-price">{product.price}</div>
            <div className="my-auction-price">{highestBid}</div>
          </div>
          <ProductModal show={modalShow} onHide={() => setModalShow(false)} />
        </>
      </ProductContext.Provider>
    );
  } else if (pageSource === "myhistory") {
    return (
      <ProductContext.Provider
        value={{
          product,
          datetime,
          address,
          highestBid,
        }}
      >
        <>
          <div className="product-card" onClick={handleClick}>
            <div className="history-image">
              {product.image ? (
                <img
                  className="Card-image-css"
                  src={`http://146.190.18.26:8000/api/download/${product.image}`}
                  alt="no pic"
                ></img>
              ) : (
                <></>
              )}
            </div>

            <div className="history-name">{product.name}</div>
            <div className="history-status">{product.orderStatus}</div>
            <div className="history-date">{datetime}</div>
            <div className="history-price">{highestBid}</div>
          </div>
          <OrderModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            address={address}
          />
        </>
      </ProductContext.Provider>
    );
  } else if (pageSource === "mywonauctions") {
    return (
      <ProductContext.Provider
        value={{
          product,
          bids,
          highestBid,
          setHighestBid,
          myHighestBid,
          setMyHighestBid,
          currentBid,
          setCurrentBid,
          address,
          deliveries,
          pageSource,
        }}
      >
        <>
          <div className="product-card" onClick={handleClick}>
            <div className="my-auction-image">
              {product.image ? (
                <img
                  className="Card-image-css"
                  src={`http://146.190.18.26:8000/api/download/${product.image}`}
                  alt="no pic"
                ></img>
              ) : (
                <></>
              )}
            </div>
            <div className="my-auction-name">{product.name}</div>
            {product.description.length > 20 ? (
              <div className="product-description">
                {product.description.slice(0, 20) + "..."}
              </div>
            ) : (
              <div className="product-description">{product.description}</div>
            )}
            {product.orderStatus === "In transit" ? (
              <div className="my-auction-endtime">Sit back and relax</div>
            ) : (
              <div className="my-auction-endtime">Choose a shipping method</div>
            )}

            <div className="my-auction-price">Price paid: {highestBid}</div>
          </div>
          <ProductModal show={modalShow} onHide={() => setModalShow(false)} />
        </>
      </ProductContext.Provider>
    );
  } else {
    return (
      <ProductContext.Provider
        value={{
          product,
          bids,
          highestBid,
          setHighestBid,
          myHighestBid,
          setMyHighestBid,
          currentBid,
          setCurrentBid,
          deliveries,
        }}
      >
        <>
          <div className="product-card" onClick={handleClick}>
            <div className="product-image">
              {product.image ? (
                <img
                  className="Card-image-css"
                  src={`http://146.190.18.26:8000/api/download/${product.image}`}
                  alt="no pic"
                ></img>
              ) : (
                <></>
              )}
            </div>
            <div className="product-category">{product.category}</div>
            <div className="product-name">{product.name}</div>
            {product.description.length > 20 ? (
              <div className="product-description">
                {product.description.slice(0, 20) + "..."}
              </div>
            ) : (
              <div className="product-description">{product.description}</div>
            )}

            <div className="product-time">{product.timeRemaining}</div>
            <div className="product-price">{currentBid}</div>
            <div className="product-buyout">{product.buyout}</div>
          </div>
          <ProductModal show={modalShow} onHide={() => setModalShow(false)} />
        </>
      </ProductContext.Provider>
    );
  }
};

export default ProductCard;
