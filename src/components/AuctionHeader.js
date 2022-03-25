import React from "react";
import { Link } from "react-router-dom";

function AuctionHeader({ loadProducts }) {
  return (
    <div className="auction-header-container">
      <ul>
        <Link to="bazaar" onClick={loadProducts}>
          Card Bazaar
        </Link>
        <Link to="auctions" onClick={loadProducts}>
          My Auctions
        </Link>
        <Link to="profile" onClick={loadProducts}>
          Profile
        </Link>
      </ul>
    </div>
  );
}
  
export default AuctionHeader;
