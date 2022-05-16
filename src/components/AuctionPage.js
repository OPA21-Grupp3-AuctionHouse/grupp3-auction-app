import React, { useState, createContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AuctionHeader from "./AuctionHeader";
import UnderNav from "./UnderNav";
import AuctionCategories from "./AuctionCategories";
import SearchBar from "./SearchBar";
import SortBar from "./SortBar";
import OrderSort from "./OrderSort";
import ProductList from "./ProductList";
import OrderList from "./OrderList";
//import OrderData from "./data/OrderData.json";
import NewAuctionPage from "./NewAuctionPage";
import Profile from "./Profile";
import MyBidsPage from "./MyBidsPage";
import MyBidsSortBar from "./MyBidsSortBar";
import StartPage from "./StartPage";
import ProductService from "../services/ProductService";
import BidService from "../services/BidService";
import UserService from "../services/UserService";
import MyFollowPage from "../unusedComponents/MyFollowPage";
import MyFollowSort from "../unusedComponents/MyFollowSort";
import MyAuctions from "./MyAuctions";
import MyAuctionsBar from "./MyAuctionsBar";

export const DataContext = createContext();

function AuctionPage() {
  const [products, setProducts] = useState([]);
  const [bids, setBids] = useState([]);
  const [highestBid, setHighestBid] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [filteredView, setFilteredView] = useState(Boolean);
  const [user, setUser] = useState();

  useEffect(() => {
    getProducts();
    getBids();
    getUser();
  }, []);

  useEffect(() => {
    async function getProducts() {
      ProductService.getProducts().then((res) => {
        setProducts(res.data);
        console.log(res.data);
      });
    }

    async function getBids() {
      BidService.getBids().then((res) => {
        setBids(res.data);
        console.log(res.data);
      });
    }

    getProducts();
    getBids();
  }, []);

  const getProducts = () => {
    ProductService.getProducts().then((res) => {
      setProducts(res.data);
    });
  };

  const getBids = () => {
    BidService.getBids().then((res) => {
      setBids(res.data);
    });
  };

  const getHighestBid = () => {
    BidService.getHighestBid().then((res) => {
      setHighestBid(res.data);
    });
  };

  const getUser = () => {
    UserService.getUser().then((res) => {
      setUser(res.data);
      console.log(res.data);
    });
  };
  const getUserById = () => {
    UserService.getUserById("626736e362a4c438443c45c3").then((res) => {
      setUser(res.data);
      console.log(res.data);
    });
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
    <div className="auction-outer-outer-container">
      <div className="auction-outer-container">
        <AuctionHeader />
        <div className="auction-inner-container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <DataContext.Provider
                  value={{
                    user,
                  }}
                >
                  <StartPage />{" "}
                </DataContext.Provider>
              }
            />

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
                      bids,
                      setBids,
                      user,
                      setUser,
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
                  <DataContext.Provider
                    value={{
                      user,
                      setUser,
                    }}
                  >
                    <Profile />
                  </DataContext.Provider>
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
                      products,
                      setProducts,
                      searchResult,
                      setSearchResult,
                      filteredView,
                      bids,
                      setBids,
                      highestBid,
                      setHighestBid,
                      user,
                      setUser,
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
                  <div className="order-inner-inner-container">
                    <DataContext.Provider
                      value={{
                        products,
                        setProducts,
                        bids,
                        setBids,
                        user,
                        setUser,
                      }}
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
                        products,
                        setProducts,
                        searchResult,
                        setSearchResult,
                        filteredView,
                        bids,
                        setBids,
                        user,
                        setUser,
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
                      products,
                      setProducts,
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
                        products,
                        setProducts,
                        bids,
                        setBids,
                        user,
                        setUser
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
    </div>
  );
}

export default AuctionPage;
