import { useContext, React } from "react";
import { DataContext } from "./AuctionPage";
import allBids from "./data/allBids.json";
import ProductCard from "./ProductCard";

function MyBidsPage() {
  const loggedinuser = {
    id: "2",
  };
  const provider = useContext(DataContext);
  const loggedUserBids = provider.bids.filter(
    (bids) => bids.userId === loggedinuser.id
  );

  //const highestBid = provider.bids.filter(
    //(bids) =>
  //);
  console.log(loggedUserBids);

  let allAuctionId = loggedUserBids.map((bid) => bid.auctionId);
  console.log(allAuctionId);
  const loggedUserAuctions = provider.products.filter(
    (product) => allAuctionId.includes(product.id)
  );
  console.log(loggedUserAuctions);

  return (
    <div className="order-container">
      {loggedUserAuctions.map((product) => (
        <ProductCard key={product.id} product={product} pageSource="mybids" />
      ))}
    </div>
  );
}

export default MyBidsPage;
