import React, { useContext, useState } from "react";
import { DataContext } from "./AuctionPage";
import ProductModal from "./ProductModal";

const MyAuctionsCard = ({ product }) => {
  const [modalShow, setModalShow] = useState(false);
  const provider = useContext(DataContext);

  const delAuction = (e) => {
    const toId = e.target.value;
    if (window.confirm("Are you sure?")) {
      const tempTestList = provider.myBidsProducts.filter(
        (product) => product.key != toId
      );
      console.log(tempTestList);
      provider.setMyBidsProducts(tempTestList);
    }
  };

  const currentDate = new Date().getTime();
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

  return (
    <>
      <div className="product-card" onClick={() => setModalShow(true)}>
        <div className="product-image">image</div>
        <div className="product-name">{product.name}</div>
        <div className="product-endTime">
          {msToTime(Date.parse(product.endTime) - currentDate)}
        </div>

        <div className="product-myAuctionBid">{product.highestBid}</div>
        <div className="product-myAuctionBid">
          {product.buyout}
          <button>BUY</button>
          <button value={product.key} onClick={delAuction}>
            Delete
          </button>
        </div>
      </div>
      <ProductModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        product={product}
      />
    </>
  );
};

export default MyAuctionsCard;
