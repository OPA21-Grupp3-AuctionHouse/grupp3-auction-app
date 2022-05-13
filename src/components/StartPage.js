import React, { useEffect, useState } from "react";
import UserService from "../services/user.service";
import AuthService from "../services/auth.service";

const StartPage = () => {
  const currentUser = AuthService.getCurrentUser();
  const [content, setContent] = useState("");
  useEffect(() => {
    UserService.getStartPageContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setContent(_content);
      }
    );
  }, []);

  return (
    <div>
      <div className="auction-start-container">
        <h2>Welcome, user!</h2>
      </div>
      <div className="container">
        <header className="jumbotron">
          <h3>
            <strong>{currentUser.username}</strong> Profile
          </h3>
        </header>
        <p>
          <strong>Id:</strong> {currentUser.id}
        </p>
        <p>
          <strong>Email:</strong> {currentUser.email}
        </p>
      </div>
    </div>
  );
};

export default StartPage;
