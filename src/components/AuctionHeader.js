import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import UserService from "../services/UserService";

function AuctionHeader() {
  let navigate = useNavigate();

  const logout = (e) => {
    e.preventDefault();
    UserService.logoutUser().then(navigate("/"));
  };
  return (
    <div className="auction-header-container">
      <ul>
        <Link data-cy="bazaar" to="bazaar">Card Bazaar</Link>
        <Link data-cy="auction" to="auctions">My Auctions</Link>
        <Link data-cy="profile" to="profile">Profile</Link>
        <button
          className="logout-button-profile"
          data-cy="logout"
          type="submit"
          onClick={logout}
        >
          Logout
        </button>
      </ul>
    </div>
  );
}

export default AuctionHeader;
