import React from "react";
import { Link } from "react-router-dom";

function UnderNav() {
  return (
    <div className="under-nav-container">
      <ul>
        <Link to="/bids">My bids</Link>
        <Link to="/auction">My auctions</Link>
        <Link to="/follow">My followed auctions</Link>
        <Link to="/history">Order history</Link>
      </ul>
    </div>
  );
}
export default UnderNav;
