import React, { useEffect, useState } from "react";
import UserService from "../services/user.service";

const StartPage = () => {
  const [content, setContent] = useState("");
  useEffect(() => {
    UserService.getUserContent().then(
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
    <div className="auction-start-container">
      <h2>Welcome, user!</h2>
    </div>
  );
};

export default StartPage;
