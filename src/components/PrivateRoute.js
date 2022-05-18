import React, { useContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { DataContext } from "../App";
import UserService from "../services/UserService";
import Cookies from "js-cookie";

const PrivateRoute = ({ children }) => {
  const provider = useContext(DataContext);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    UserService.getUser().then((res) => {
      console.log(res);
      if (res) {
        setAuth(true);
      }
    });
  }, []);
  console.log(auth);
  return provider.isAuthenticated === true ? (
    children
  ) : (
    <Navigate replace to="/" />
  );
};

export default PrivateRoute;
