import React, {useState} from "react";
import AuctionHeader from "./AuctionHeader";
import AuctionCategories from "./AuctionCategories";
import SearchBar from "./SearchBar";
import SortBar from "./SortBar";
import ProductList from "./ProductList";

function AuctionPage() {
    const [products, setProducts] = useState([]);

  return (
    <div className="auction-outer-container">
      <AuctionHeader />
      <div className="auction-inner-container">
        <AuctionCategories />
        <div className="auction-inner-inner-container">
            <SearchBar />
            <SortBar />
            <ProductList />
        </div>
      </div>
    </div>
  );
}

export default AuctionPage;
