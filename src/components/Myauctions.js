import { useContext, React } from "react";
import { DataContext } from "./AuctionPage";
import MyAuctionsCard from "./MyAuctionsCard";

const MyAuctions = () => {
  const loggedinuser = {
    id: 1,
  };
  const provider = useContext(DataContext);
  const userAuctionList = provider.myBidsProducts.filter(
    (product) => product.ownerId === loggedinuser.id
  );
  return (
    <div className="order-container">
      {userAuctionList.map((product) => (
        <MyAuctionsCard key={product.key} product={product} />
      ))}
    </div>
  );
};

export default MyAuctions;
