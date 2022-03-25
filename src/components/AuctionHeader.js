import React from "react";
import { Link } from "react-router-dom";

function AuctionHeader() {
  return (
    <div className="auction-header-container">
      <ul>
        <Link to="bazaar">Card Bazaar</Link>
        <Link to="auctions">My Auctions</Link>
        <Link to="profile">Profile</Link>
      </ul>
    </div>
  );
}
  
export default AuctionHeader;
