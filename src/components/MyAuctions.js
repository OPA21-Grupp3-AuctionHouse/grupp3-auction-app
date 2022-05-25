import { useContext, React } from "react";
import { DataContext } from "./AuctionPage";

import ProductCard from "./ProductCard";

const MyAuctions = () => {
  const provider = useContext(DataContext);

  const userAuctionList = provider.products.filter(
    (product) => product.ownerId === provider.user
  );
  return (
    <div className="order-container">
      {userAuctionList.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          pageSource="myauctions"
        />
      ))}
    </div>
  );
};

export default MyAuctions;
