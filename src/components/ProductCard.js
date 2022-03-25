import React, { useState, useEffect } from "react";
import ProductModal from "./ProductModal";

const ProductCard = ({ product }) => {
  const [modalShow, setModalShow] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date().getTime());
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
  product.timeRemaining = msToTime(Date.parse(product.endTime) - currentDate);
  return (
    <>
      <div className="product-card" onClick={() => setModalShow(true)}>
        <div className="product-image">image</div>
        <div className="product-category">{product.category}</div>
        <div className="product-name">{product.name}</div>
        <div className="product-description">{product.description}</div>
        <div className="product-price">{product.price}</div>
        <div className="product-buyout">{product.buyout}</div>
      </div>
      <ProductModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        product={product}
      />
    </>
  );
};

export default ProductCard;
