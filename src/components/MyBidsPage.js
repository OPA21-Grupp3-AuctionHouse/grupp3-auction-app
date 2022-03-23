import { useContext, React } from "react";
import { DataContext } from "./AuctionPage";
import MyBidsCard from "./MyBidsCard";

function MyBidsPage() {
  const provider = useContext(DataContext);

  return (
    <div className="order-container">
      {provider.myBidsProducts.map((product) => (
        <MyBidsCard key={provider.myBidsProducts.key} product={product} />
      ))}
    </div>
  );
}

export default MyBidsPage;
