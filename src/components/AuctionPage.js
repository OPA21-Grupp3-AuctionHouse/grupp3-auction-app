import React from "react";
import { Routes, Route } from "react-router-dom";
import AuctionHeader from "./AuctionHeader";
import NewAuctionPage from "./NewAuctionPage";
import Profile from "./Profile";
import * as ReactDOM from "react-dom";
const AuctionPage = (props) => {
  return (
    <>
      <AuctionHeader />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <NewAuctionPage />
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
              <NewAuctionPage />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default AuctionPage;
