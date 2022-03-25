import { useContext, React } from "react";
import { DataContext } from "./AuctionPage";

import ProductCard from "./ProductCard";

const MyAuctions = () => {
  const loggedinuser = {
    id: 1,
  };
  const provider = useContext(DataContext);

  const userAuctionList = provider.products.filter(
    (product) => product.ownerId === loggedinuser.id
  );
  return (
    <div className="order-container">
      {userAuctionList.map((product) => (
        <ProductCard
          key={product.key}
          product={product}
          pageSource="myauctions"
        />
      ))}
    </div>
  );
};

export default MyAuctions;
