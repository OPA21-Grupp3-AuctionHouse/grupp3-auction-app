import { useState } from "react";
import { Col, Row, Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./LoginRegister.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "", // required
    password: "", // required
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3333/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => console.log("successful login", data.user));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Container>
        <Row className="mt-5">
          <Col>
            <Form onSubmit={e => handleSubmit(e)}>
              <h3 className="text-success p-3 text-center">Login</h3>

              <Form.Group className="mb-3" controlId="">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Email" value={formData.email} name="email" onChange={e => handleChange(e)} />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={formData.password} name='password' onChange={e => handleChange(e)}/>
              </Form.Group>

              {/* <Link to="/startpage"> */}
                <div className="d-grid gap-2 mt-3">
                  <Button variant="success" size="sm" type="submit">
                    Login
                  </Button>
                </div>
              {/* </Link> */}
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
