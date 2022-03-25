import { useContext, React } from "react";
import { DataContext } from "./AuctionPage";
import allBids from "./data/allBids.json";
import ProductCard from "./ProductCard";

function MyBidsPage() {
  const loggedinuser = {
    id: 1,
  };
  const provider = useContext(DataContext);
  const loggedUserBids = allBids.filter(
    (bids) => bids.userId === loggedinuser.id
  );

  let allAuctionId = loggedUserBids.map((product) => product.auctionId);
  const loggedUserAuctions = provider.products.filter((product) =>
    allAuctionId.includes(product.key)
  );

  return (
    <div className="order-container">
      {loggedUserAuctions.map((product) => (
        <ProductCard key={product.key} product={product} pageSource="mybids" />
      ))}
    </div>
  );
}

export default MyBidsPage;
