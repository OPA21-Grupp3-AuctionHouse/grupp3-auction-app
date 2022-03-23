import React, { Component } from "react";
import { Col, Row, Form, Button, Container} from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./LoginRegister.css";

class Register extends Component {
  render() {
    return (
      <>
        <Container>
          <Row className="mt-5">
            <Col>
              <Form>
                <h3 className="text-success p-3 text-center">Register</h3>
                <Form.Group className="mb-3" controlId="formBasicFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="First Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Last Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" placeholder="Username" />
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
                <p>
                  Already registered <Link to="/">log in?</Link>
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
