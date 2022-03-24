import { useContext, React } from "react";
import { DataContext } from "./AuctionPage";
import MyBidsCard from "./MyBidsCard";
import allBids from "./data/allBids.json";

function MyBidsPage() {
  const loggedinuser = {
    id: 1,
  };
  const provider = useContext(DataContext);
  const loggedUserBids = allBids.filter(
    (bids) => bids.userId === loggedinuser.id
  );

  let allAuctionId = loggedUserBids.map((product) => product.auctionId);
  const loggedUserAuctions = provider.myBidsProducts.filter((product) =>
    allAuctionId.includes(product.key)
  );
  console.log(loggedUserAuctions);
  return (
    <div className="order-container">
      {loggedUserAuctions.map((product) => (
        <MyBidsCard key={product.key} product={product} />
      ))}
    </div>
  );
}

export default MyBidsPage;
