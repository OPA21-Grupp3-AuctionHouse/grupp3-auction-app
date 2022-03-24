import React, { useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import AuctionHeader from "./AuctionHeader";
import UnderNav from "./UnderNav";
import AuctionCategories from "./AuctionCategories";
import SearchBar from "./SearchBar";
import SortBar from "./SortBar";
import OrderSort from "./OrderSort";
import ProductList from "./ProductList";
import OrderList from "./OrderList";
import OrderData from "./data/OrderData.json";
import Products from "./data/products.json";
import NewAuctionPage from "./NewAuctionPage";
import Profile from "./Profile";
import WelcomePage from "./WelcomePage";
import MyBidsPage from "./MyBidsPage";
import myBids from "./data/myBids.json";
import MyBidsSortBar from "./MyBidsSortBar";
import MyAuctions from "./Myauctions";
import MyAuctionsBar from "./MyAuctionsBar";
import MyFollowSort from "./MyFollowSort";
import MyFollowPage from "./MyFollowPage";
import Users from "./data/users.json";
import StartPage from "./StartPage";

export const DataContext = createContext();

function AuctionPage() {
  const [users, setUsers] = useState(Users);
  const [products, setProducts] = useState(Products);
  const [orderProducts, setOrderProducts] = useState(OrderData);
  const [searchResult, setSearchResult] = useState([]);
  const [filteredView, setFilteredView] = useState(Boolean);
  const [myBidsProducts, setMyBidsProducts] = useState(myBids);

  const loadProducts = () => {
    setProducts(Products);
    filteredView(false);
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
  };

  return (
    <div className="auction-outer-container">
      <AuctionHeader loadProducts={loadProducts} />

      <div className="auction-inner-container">
        {/* <Route exact path="/" element={<WelcomePage />} /> */}
        <Routes>
          <Route exact path="/" element={<StartPage />} />
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
              <div className="order-inner-inner-container">
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
                  <DataContext.Provider
                    value={
                      {products, setProducts, myBidsProducts, setMyBidsProducts}
                    }
                  >
                    <UnderNav />
                    <NewAuctionPage />
                  </DataContext.Provider>
                </div>
              </>
            }
          />
          <Route
            exact
            path="myAuction"
            element={
              <>
                <div className="order-inner-inner-container">
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
                    <MyAuctionsBar />
                    <MyAuctions />
                  </DataContext.Provider>
                </div>
              </>
            }
          />
          <Route
             exact
             path="follow"
             element={
               <div className="order-inner-inner-container">
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
                   <MyFollowSort />
                   <MyFollowPage />
                 </DataContext.Provider>
               </div>
             }
           />
          <Route
            exact
            path="history"
            element={
              <>
                <div className="order-inner-inner-container">
                  <DataContext.Provider
                    value={{
                      orderProducts,
                      setOrderProducts,
                    }}
                  >
                    <UnderNav />
                    <OrderSort />
                    <OrderList />
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
