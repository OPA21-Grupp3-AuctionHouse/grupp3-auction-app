import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/LoginRegister/Login";
import Register from "./components/LoginRegister/Register";
import WelcomePageHeader from "./components/WelcomePageHeader";
import WelcomePage from "./components/WelcomePage";
import AuctionPage from "./components/AuctionPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <WelcomePageHeader />
              <Row className="landing">
                <Col>
                  <WelcomePage />{" "}
                </Col>
                <Col>
                  <Login />
                </Col>
              </Row>
            </>
          }
        />
        <Route
          path="/register"
          element={
            <>
              <WelcomePageHeader />
              <Row className="landing">
                <Col>
                  <WelcomePage />{" "}
                </Col>
                <Col>
                  <Register />
                </Col>
              </Row>
            </>
          }
        />
        <Route path="/startpage" element={<AuctionPage />} />
      </Routes>
    </div>
  );
}

export default App;
