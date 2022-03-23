import React, {useState} from "react";
import ProductModal from "./ProductModal";

const ProductCard = ({ product }) => {
  const [modalShow, setModalShow] = useState(false);

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
