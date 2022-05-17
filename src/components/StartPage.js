import { React, useState, useEffect } from "react";
import UserService from "../services/UserService";

function StartPage() {
  const [user, setUser] = useState();
  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    UserService.getUserName().then((res) => {
      setUser(res.data);
    });
  };

  return (
    <div className="auction-start-container">
      <h2>Welcome, {user}!</h2>
    </div>
  );
}

export default StartPage;
