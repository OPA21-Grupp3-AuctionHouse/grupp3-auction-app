import React, { useState, createContext, useEffect} from "react";
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
import MyBidsPage from "./MyBidsPage";
import myBids from "./data/myBids.json";
import MyBidsSortBar from "./MyBidsSortBar";
import MyAuctions from "./MyAuctions";
import MyAuctionsBar from "./MyAuctionsBar";
import Users from "./data/users.json";
import StartPage from "./StartPage";
import AllBids from "./data/allBids.json";
import ProductService from "../services/ProductService";
import BidService from "../services/BidService";

export const DataContext = createContext();

function AuctionPage() {
  const [products, setProducts] = useState([]);
  const [bids, setBids] = useState([]);
  const [highestBid, setHighestBid] = useState([])
  const [orderProducts, setOrderProducts] = useState(OrderData);
  const [searchResult, setSearchResult] = useState([]);
  const [filteredView, setFilteredView] = useState(Boolean);
  const [myBidsProducts, setMyBidsProducts] = useState(myBids);
  const [allBids, setAllBids] = useState(AllBids);
  const [user, setUser] = useState({
    id: "2",
    name: "blabla",
    email: "blabla@bla.com",
    username: "MyUsername",
    street: "astreet",
    areacode: "2121",
    city: "acity",
    password: "hej",
  });

  useEffect(() => {

    getProducts();
    getBids();
  }, []);

  const loadProducts = (e) => {
    e.preventDefault();
    setFilteredView(false);
  };

  const getProducts = () => {
    ProductService.getProducts().then((res) => {
      setProducts(res.data);
    });
  };

  const getBids = () => {
    BidService.getBids().then((res) => {
      setBids(res.data)
    })
  }

  const getHighestBid = () => {
    BidService.getHighestBid().then((res) => {
      setHighestBid(res.data)
    })
  }



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

  const placeBid = () => {
    setBids()
  }

  return (
    <div className="auction-outer-container">
      <AuctionHeader />

      <div className="auction-inner-container">
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
                    bids,
                    setBids,
                    user,
                    setUser
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
                    setUser
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
                    value={{
                      products,
                      setProducts,
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
                      setUser
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
              <>
                <div>
                  <UnderNav />
                </div>
              </>
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
