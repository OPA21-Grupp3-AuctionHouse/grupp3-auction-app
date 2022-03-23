import React, { Component } from "react";
import { Col, Row, Form, Button, Container, Link } from "react-bootstrap";
import "./LoginRegister.css";

class Register extends Component {
  render() {
    return (
      <>
        <Container>
          <Row className="mt-5">
            <Col>
              <Form>
                <h3>Register</h3>
                <Form.Group className="mb-3" controlId="formBasicFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="firstName" placeholder="First Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="lastName" placeholder="Last Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <div className="d-grid gap-2">
                  <Button variant="secondary" size="lg">
                    Register
                  </Button>
                </div>
                <p className="forgot-password text-right">
                  Already registered <a href="#">log in?</a>
                </p>
              </Form>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Register;
