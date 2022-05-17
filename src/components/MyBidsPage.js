import { useContext, React } from "react";
import { DataContext } from "./AuctionPage";
import ProductCard from "./ProductCard";

function MyBidsPage() {
  const provider = useContext(DataContext);

  const activeProducts = provider.products.filter(
    (product) => Date.parse(product.endTime) > Date.now()
  );
  const loggedUserBids = provider.bids.filter(
    (bid) => bid.userId === provider.user
  );

  let allAuctionId = loggedUserBids.map((bid) => bid.auctionId);

  const loggedUserAuctions = activeProducts.filter((product) =>
    allAuctionId.includes(product.id)
  );

  return (
    <div className="order-container">
      {loggedUserAuctions.map((product) => (
        <ProductCard key={product.id} product={product} pageSource="mybids" />
      ))}
    </div>
  );
}

export default MyBidsPage;
