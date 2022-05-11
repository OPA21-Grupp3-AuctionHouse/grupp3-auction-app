import { useState } from "react";
import { Col, Row, Form, Button, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./LoginRegister.css";

const Login = () => {
  //states for login
  const [formData, setFormData] = useState({
    email: "", // required
    password: "", // required
  });

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  let navigate = useNavigate();

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <p className="errorMessage">Incorrect email or password</p>
      </div>
    );
  };

  function CheckError(response) {
    if (response.status >= 200 && response.status <= 299) {
      navigate("/startpage");
      return response.json();
    } else {
      setError(true);
      throw Error("Incorrect password");
    }
  }

  // Handling form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setError(false);
    fetch("http://localhost:3333/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then(CheckError)
      .catch((error) => {
        console.log(error);
      });
  };

  // handling the input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setSubmitted(false);
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Form onSubmit={(e) => handleSubmit(e)}>
              <h3 className="text-success p-3 text-center">Login</h3>

              {/* Calling to error message */}
              <div className="messages">{errorMessage()}</div>

              <Form.Group className="mb-3" controlId="">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  name="email"
                  onChange={(e) => handleChange(e)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Password"
                  value={formData.password}
                  name="password"
                  onChange={(e) => handleChange(e)}
                />
              </Form.Group>

              <div className="d-grid gap-2 mt-3">
                <Button variant="success" size="sm" type="submit">
                  Login
                </Button>
              </div>

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
