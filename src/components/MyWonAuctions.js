import { useContext, React } from "react";
import { DataContext } from "./AuctionPage";
import ProductCard from "./ProductCard";

function MyWonAuctions() {
  const provider = useContext(DataContext);

  const completedProducts = provider.products.filter(
    (product) =>
      product.orderStatus === "Completed" && product.winner === provider.user
  );

  return (
    <div className="order-container">
      {completedProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          pageSource="mywonauctions"
        />
      ))}
    </div>
  );
}

export default MyWonAuctions;
