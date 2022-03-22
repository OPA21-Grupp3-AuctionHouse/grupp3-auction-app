import React, { useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import AuctionHeader from "./AuctionHeader";
import AuctionCategories from "./AuctionCategories";
import SearchBar from "./SearchBar";
import SortBar from "./SortBar";
import ProductList from "./ProductList";
import Products from "./data/products.json";
import NewAuctionPage from "./NewAuctionPage";
import Profile from "./Profile";

export const DataContext = createContext();

function AuctionPage() {
  const [products, setProducts] = useState(Products);
  const [searchResult, setSearchResult] = useState([]);

  const sortByCategory = () => {};

  const sortBySearch = (searchInput) => {
    const result = products.filter((product) => {
      if (!searchInput) {
        return true;
      }
      if (
        product.name.includes(searchInput) ||
        product.description.includes(searchInput) ||
        product.category.includes(searchInput)
      ) {
        return true;
      }
      return false;
    });
    setSearchResult(result);
  };

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
                <DataContext.Provider value={products}>
                  <AuctionCategories />
                  <div className="auction-inner-inner-container">
                    <SearchBar sortBySearch={sortBySearch} />
                    <SortBar />
                    <ProductList
                      products={products}
                      searchResult={searchResult}
                    />
                  </div>
                </DataContext.Provider>
              </>
            }
          />
          <Route
            exact
            path="/profile"
            element={
              <>
                
                    <Profile />
                
              </>
            }
          />
          <Route
            exact
            path="/auctions"
            element={
              <>
              <DataContext.Provider value={products}>
                <NewAuctionPage />
            </DataContext.Provider>
              </>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default AuctionPage;
