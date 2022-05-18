import UserService from "../services/UserService";
import { React, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ redirectPath = "/", children }) {
  const [user, setUser] = useState();
  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    UserService.getUserName().then((res) => {
      setUser(res.data);
    });
  };

  if (!user) {
    return <Navigate to={redirectPath} replace />;
  } else {
    return children;
  }
}

export default PrivateRoute;
