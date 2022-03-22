import React, { useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import AuctionHeader from "./AuctionHeader";
import AuctionCategories from "./AuctionCategories";
import SearchBar from "./SearchBar";
import SortBar from "./SortBar";
import ProductList from "./ProductList";
import Products from "./data/products.json";

export const DataContext = createContext();

function AuctionPage() {
  const [products, setProducts] = useState(Products);
  const [searchResult, setSearchResult] = useState([]);

  const sortBySearch = (searchInput) => {
    const result = products.filter((product) => {
      if (!searchInput) {
        return true;
      }
      if (
        product.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        product.description.toLowerCase().includes(searchInput.toLowerCase()) ||
        product.category.toLowerCase().includes(searchInput.toLowerCase())
      ) {
        return true;
      }
      return false;
    });
    if (result.length > 0) {
      setSearchResult(result);
    } else {
      setSearchResult(searchInput);
    }
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
                  <AuctionCategories sortBySearch={sortBySearch} />
                </DataContext.Provider>
                <div className="auction-inner-inner-container">
                  <SearchBar sortBySearch={sortBySearch} />
                  <SortBar />
                  <DataContext.Provider value={{ products, searchResult }}>
                    <ProductList />
                  </DataContext.Provider>
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
