import React from "react";
import { Link } from "react-router-dom";

function UnderNav() {
  return (
    <div className="under-nav-container">
      <ul>
        <Link to="/auctions">My bids</Link>
        <Link to="/myAuction">My auctions</Link>
        <Link to="/follow">Followed auctions</Link>
        <Link to="/history">Order history</Link>
        <Link to="/newauction">Post auction</Link>
      </ul>
    </div>
  );
}
export default UnderNav;
