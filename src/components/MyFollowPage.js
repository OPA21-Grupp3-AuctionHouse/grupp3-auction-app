import { useContext, React } from "react";
import { DataContext } from "./AuctionPage";
import MyFollowCard from "./MyFollowCard";
import myBids from "./data/myBids.json";

function MyFollowPage() {
  const loggedinuser = {
    id: 1,
  };
  const provider = useContext(DataContext);
  const loggedUserBids = myBids.filter(
    (bids) => bids.userId === loggedinuser.id
  );

  let allAuctionId = loggedUserBids.map((product) => product.auctionId);
  const loggedUserAuctions = provider.myBidsProducts.filter((product) =>
    allAuctionId.includes(product.key)
  );
  console.log(loggedUserAuctions);
  return (
    <div className="order-container">
      {provider.myBidsProducts.map((product) => (
        <MyFollowCard key={provider.myBidsProducts.key} product={product} />
      ))}
    </div>
  );
}

export default MyFollowPage;
