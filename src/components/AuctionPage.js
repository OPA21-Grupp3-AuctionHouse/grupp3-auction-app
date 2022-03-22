import React from "react";

import AuctionHeader from "./AuctionHeader";
import { BrowserRouter as Route, Routes } from "react-router-dom";
import NewAuctionPage from "./NewAuctionPage";
import Profile from "./Profile";
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
