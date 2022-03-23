import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Col, Row } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/LoginRegister/Login";
import Register from "./components/LoginRegister/Register";
import WelcomePageHeader from "./components/WelcomePageHeader";
import WelcomePage from "./components/WelcomePage";
import WelcomePageFooter from "./components/WelcomePageFooter.js";

function App() {
  return (
    <div className="App">
      <WelcomePageHeader />
      <Row className="landing">
        <Col><WelcomePage /></Col>
        <Routes>
          <Route exact path="/" element={<Col><Login /></Col>} />
          <Route path="/register" element={<Col><Register /></Col>} />
        </Routes>
      </Row>
      <WelcomePageFooter />
    </div>
  );
}

export default App;

