import React from "react";
import { Col, Row, Form, Button, Container } from "react-bootstrap";
import "./LoginRegister.css";

const Login = () => {
  return (
    <>
      <Container className="loginComponent">
        <Row className="mt-5">
          <Col>
            <Form>
              <h3 className="shadow-sm text-success p-3 text-center rounded">
                Login
              </h3>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <div className="d-grid gap-2 mt-2">
                <Button variant="success" size="sm" type="submit">
                  Login
                </Button>
                <Button variant="secondary" size="sm" type="submit">
                  Register
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
