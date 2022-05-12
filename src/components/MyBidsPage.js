import { useContext, React } from "react";
import { DataContext } from "./AuctionPage";
import ProductCard from "./ProductCard";

function MyBidsPage() {
  const provider = useContext(DataContext);
  const loggedUserBids = provider.bids.filter(
    (bids) => bids.userId === provider.user.id
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
