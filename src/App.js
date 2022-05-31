import { React, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/LoginRegister/Login";
import Register from "./components/LoginRegister/Register";
import WelcomePageHeader from "./components/WelcomePageHeader";
import WelcomePage from "./components/WelcomePage";
import AuctionPage from "./components/AuctionPage";
import WelcomePageFooter from "./components/WelcomePageFooter";
import Preview from "./components/Preview";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className="welcomePageStart">
              <div className="welcomepage-upper">
                <WelcomePageHeader />
                <Row className="landing">
                  <Col className="leftSide">
                    <WelcomePage />
                  </Col>
                  <Col className="rightSide">
                    <Login />
                  </Col>
                </Row>
                <WelcomePageFooter />
              </div>
              <div className="welcomepage-lower">
                <Preview />
              </div>
            </div>
          }
        />
        <Route
          path="/register"
          element={
            <div className="welcomeContainer">
              <WelcomePageHeader />
              <Row className="landing">
                <Col>
                  <WelcomePage />{" "}
                </Col>
                <Col>
                  <Register />
                </Col>
              </Row>
            </div>
          }
        />
        <Route
          path="/startpage/*"
          element={
            <PrivateRoute>
              <AuctionPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
