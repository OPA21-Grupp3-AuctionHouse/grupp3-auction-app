import React, { useState } from "react";
import { Col, Row, Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./LoginRegister.css";
import Users from '../data/users.json';

const Login = () => {

  const [users, setUsers] = useState(Users);
  const [loggedInUser, setLoggedInUser] = useState();

  const logInValidation = () => {
    setLoggedInUser(Users);
    
    var x = 2
  };



  return (
    <>
      <Container>
        <Row className="mt-5">
          <Col>
            <Form>
              <h3 className="text-success p-3 text-center">Login</h3>
              <Form.Group controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Username" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Link to="/startpage">
                <div className="d-grid gap-2 mt-3">
                  <Button onClick={logInValidation} variant="success" size="sm" type="submit">
                    Login
                  </Button>
                </div>
              </Link>
              <Link to="/register">
                <div className="d-grid gap-2 mt-3">
                  <Button variant="secondary" size="sm" type="submit">
                    Register
                  </Button>
                </div>
              </Link>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
