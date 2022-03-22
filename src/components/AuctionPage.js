import React from "react";

import AuctionHeader from "./AuctionHeader";
import { BrowserRouter as Route, Routes } from "react-router-dom";
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
