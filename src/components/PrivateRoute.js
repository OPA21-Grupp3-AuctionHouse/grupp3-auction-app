import { React, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import UserService from "../services/UserService";

function PrivateRoute({ redirectPath = "/", children }) {
  const [user, setUser] = useState();
  const [userChecked, setUserChecked] = useState(false);

  let currentUser = localStorage.getItem("user");

  if (currentUser && !userChecked) {
    console.log(currentUser);
    setUser(currentUser);
    setUserChecked(true);
    return <Navigate to={children} />;
  } else {
    return <Navigate to={redirectPath} />;
  }
}

export default PrivateRoute;
