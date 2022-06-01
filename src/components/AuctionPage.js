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
import NewAuctionPage from "./NewAuctionPage";
import Profile from "./Profile";
import MyBidsPage from "./MyBidsPage";
import MyBidsSortBar from "./MyBidsSortBar";
import StartPage from "./StartPage";
import ProductService from "../services/ProductService";
import MyAuctionsBar from "./MyAuctionsBar";
import MyAuctions from "./MyAuctions";
import BidService from "../services/BidService";
import UserService from "../services/UserService";
import MyWonAuctions from "./MyWonAuctions";
import MyWonAuctionsSortBar from "./MyWonAuctionSortBar";
import DeliveryService from "../services/DeliveryService";

export const DataContext = createContext();

function AuctionPage() {
  const [products, setProducts] = useState([]);
  const [bids, setBids] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [filteredView, setFilteredView] = useState(Boolean);
  const [user, setUser] = useState();
  const [address, setAddress] = useState();
  const [deliveries, setDeliveries] = useState();
  useEffect(() => {
    async function getUser() {
      UserService.getUser().then((res) => {
        setUser(res.data);
      });
    }

    async function getAddress() {
      UserService.getAddress().then((res) => {
        setAddress(res.data);
      });
    }

    async function getProducts() {
      ProductService.getProducts().then((res) => {
        let tempdata = res.data;
        tempdata.map((product) =>
          BidService.getHighestBid(product.id).then((resu) => {
            if (resu.data.bidAmount) {
              product.hightestBid = resu.data.bidAmount;
              console.log(tempdata);
            } else {
              product.hightestBid = product.price;
            }
            console.log(tempdata);
            setProducts(tempdata);
          })
        );
      });
    }

    async function getBids() {
      BidService.getBids().then((res) => {
        setBids(res.data);
      });
    }

    async function getAllDeliveriesModal() {
      DeliveryService.getAllDeliveries().then((res) => {
        let companyNames = [];
        res.data.map((companyname) => {
          companyNames.push(companyname);
        });
        setDeliveries(companyNames);
      });
    }
    getAllDeliveriesModal();
    getUser();
    getAddress();
    getProducts();
    getBids();
  }, []);

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
      setSearchResult(result.filter((res) => res.orderStatus === "Active"));
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
                      <ProductList />
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
                      setAddress,
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
              path="mywonauctions"
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
                      user,
                      setUser,
                      address,
                      deliveries,
                    }}
                  >
                    <UnderNav />
                    <MyWonAuctionsSortBar />
                    <MyWonAuctions />
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
                        setUser,
                        address,
                        deliveries,
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
