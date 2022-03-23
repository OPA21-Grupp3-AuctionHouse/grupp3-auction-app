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
import WelcomePage from "./WelcomePage";
import UnderNav from "./UnderNav";
import OrderList from "./OrderList";
import OrderSort from "./OrderSort";
import MyBidsPage from "./MyBidsPage";
import myBids from "./data/myBids.json";
import MyBidsSortBar from "./MyBidsSortBar";
import Users from "./data/users.json";

export const DataContext = createContext();

function AuctionPage() {
  const [users, setUsers] = useState(Users);
  const [products, setProducts] = useState(Products);
  const [searchResult, setSearchResult] = useState([]);
  const [filteredView, setFilteredView] = useState(Boolean);
  const [myBidsProducts, setMyBidsProducts] = useState(myBids);

  const loadProducts = () => {
    setProducts(Products);
  };

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

    console.log(products);

    if (result.length === products.length) {
      setFilteredView(false);
    } else if (result.length > 0 && result.length !== products.length) {
      setFilteredView(true);
      setSearchResult(result);
    } else if (searchInput.length > 0) {
      setFilteredView(true);
      setSearchResult(searchInput);
    } else {
      setSearchResult(searchInput);
      setFilteredView(false);
    }

    console.log(products);
  };

  return (
    <div className="auction-outer-container">
      <AuctionHeader loadProducts={loadProducts} />

      <div className="auction-inner-container">
        {/* <Route exact path="/" element={<WelcomePage />} /> */}
        <Routes>
          <Route
            path="bazaar"
            element={
              <>
                <DataContext.Provider
                  value={{
                    products,
                    setProducts,
                    searchResult,
                    setSearchResult,
                    filteredView,
                  }}
                >
                  <AuctionCategories sortBySearch={sortBySearch} />
                  <div className="auction-inner-inner-container">
                    <SearchBar sortBySearch={sortBySearch} />
                    <SortBar />
                    <ProductList setFilteredView={setFilteredView} />
                  </div>
                </DataContext.Provider>
              </>
            }
          />
          <Route
            exact
            path="profile"
            element={
              <>
                <Profile />
              </>
            }
          />
          <Route
            exact
            path="auctions"
            element={
              <div>
                <DataContext.Provider
                  value={{
                    myBidsProducts,
                    setMyBidsProducts,
                    searchResult,
                    setSearchResult,
                    filteredView,
                  }}
                >
                  <UnderNav />
                  <MyBidsSortBar />
                  <MyBidsPage />
                </DataContext.Provider>
              </div>
            }
          />
          <Route
            exact
            path="newauction"
            element={
              <>
                <div>
                  <DataContext.Provider value={products}>
                    <UnderNav />
                    <NewAuctionPage />
                  </DataContext.Provider>
                </div>
              </>
            }
          />
          <Route
            exact
            path="History"
            element={
              <>
                <div>
                  <UnderNav />
                  <OrderSort />
                  <OrderList />
                </div>
              </>
            }
          />
          <Route
            exact
            path="follow"
            element={
              <>
                <div>
                  <UnderNav />
                </div>
              </>
            }
          />

          <Route
            exact
            path="/myAuction"
            element={
              <>
                <div>
                  <UnderNav />
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
