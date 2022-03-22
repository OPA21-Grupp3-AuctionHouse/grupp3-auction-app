
import React from "react";
import {Link} from "react-router-dom";

function UnderNav() {
    return (
      <div className="under-nav-container">
        <ul>
          <Link to="/bids">My bids</Link>
          <Link to="/auctions">My auctions</Link>
          <Link to="/follow">My followed auctions</Link>
          <Link to ="/History">Order history</Link>
        </ul>
      </div>
    );
  }
  export default UnderNav;

/* const UnderNav = () =>{
    return(
/*         <Nav justify varient className="justify-content-center"
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
        <Nav.Item>
            <Nav.Link href="/home">My Bids</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-1">My auctions</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-2">My followed auctions</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>Order History</Nav.Link>
        </Nav.Item>
        </Nav> */
/*         <div class = "under-nav">
            <la>My bids</la>
            <la>My auctions</la>
            <la>My followed auctions</la>
            <la>Order History</la>

        </div> */
//    )
//} 


