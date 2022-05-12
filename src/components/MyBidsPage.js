import { useContext, React } from "react";
import { DataContext } from "./AuctionPage";
import ProductCard from "./ProductCard";

function MyBidsPage() {
  const provider = useContext(DataContext);
  const loggedUserBids = provider.bids.filter(
    (bids) => bids.userId === provider.user.id
  );

  console.log(loggedUserBids);

  let allAuctionId = loggedUserBids.map((bid) => bid.auctionId);
  console.log(allAuctionId);
  const loggedUserAuctions = provider.products.filter((product) =>
    allAuctionId.includes(product.id)
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
