import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
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
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <AuctionCategories />
                <div className="auction-inner-inner-container">
                  <SearchBar />
                  <SortBar />
                  <ProductList />
                </div>
              </>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default AuctionPage;
