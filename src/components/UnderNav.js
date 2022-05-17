import React from "react";
import { Link } from "react-router-dom";

function UnderNav() {
  //<Link to="/startpage/follow">Followed auctions</Link>

  return (
    <div className="under-nav-container">
      <ul>
        <Link to="/startpage/auctions">My bids</Link>
        <Link to="/startpage/myAuction">My auctions</Link>
        <Link to="/startpage/history">Order history</Link>
        {/*<Link to="/startpage/history">Order history</Link>*/}
        <Link to="/startpage/newauction">Post auction</Link>
      </ul>
    </div>
  );
}
export default UnderNav;
