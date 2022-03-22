import React from "react";
import { Routes, Route } from "react-router-dom";
import AuctionHeader from "./AuctionHeader";
import NewAuctionPage from "./NewAuctionPage";
const AuctionPage = (props) => {
  return (
    <>
      <AuctionHeader />
      <Routes>
        <Route path="/auctions">
          <NewAuctionPage />
        </Route>
        <Route path="/profile">
          <NewAuctionPage />
        </Route>
        <Route path="/">
          <NewAuctionPage />
        </Route>
      </Routes>
    </>
  );
};

export default AuctionPage;
