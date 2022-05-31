import React from "react";
import { Link } from "react-router-dom";

function UnderNav() {
  //<Link to="/startpage/follow">Followed auctions</Link>

  return (
    <div className="under-nav-container">
      <ul>
        <Link to="/startpage/auctions">My bids</Link>
        <Link data-cy="submitedauction" to="/startpage/myAuction">My auctions</Link>
        <Link data-cy="wonauction" to="/startpage/mywonauctions">Won auctions</Link>
        <Link data-cy="history" to="/startpage/history">Order history</Link>
        <Link data-cy="createauction" to="/startpage/newauction">Post auction</Link>
      </ul>
    </div>
  );
}
export default UnderNav;
