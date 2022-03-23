import { useContext, React } from "react";
import { DataContext } from "./AuctionPage";
import MyBidsCard from "./MyBidsCard";

function MyBidsPage() {
  const products = useContext(DataContext);
  console.log(products);
  return (
    <div className="order-container">
      {products.map((product) => (
        <MyBidsCard key={product.key} product={product} />
      ))}
    </div>
  );
}

export default MyBidsPage;
