import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AuctionHeader from "./navigation/AuctionsHeader";
import OrderDetail from "./OrderSort";
import OrderList from "./OrderList";
import UnderNav from "./navigation/UnderNav";

function OrderPage() {
  const [] = useState([]);

  return (
    <div className="order-outer-container">
      <AuctionHeader />
      <UnderNav/>
      <div className="order-inner-container">
        <Routes>
          <Route
            exact
            path="/History"
            element={
              <>
                <div className="order-inner-inner-container">
                  <OrderDetail/>
                  <OrderList /> 
                </div>
              </>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default OrderPage;
