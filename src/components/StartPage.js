import React, { useState, useEffect } from "react";
import UserService from "../services/UserService";

function StartPage() {
  const [user, setUser] = useState();

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    UserService.getUser().then((res) => {
      console.log(res.data);
      setUser(res.data);
    });
  };

  return (
    <div className="auction-start-container">
      <h2>Welcome, User!</h2>
    </div>
  );
}

export default StartPage;
