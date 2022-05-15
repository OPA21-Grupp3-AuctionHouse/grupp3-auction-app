import { useState } from "react";
import { Col, Row, Form, Button, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../services/AuthService";
import UserService from "../../services/UserService";
import "./LoginRegister.css";

const Login = () => {
  //states for login
  const [formData, setFormData] = useState({
    username: "", // required
    password: "", // required
  });

  // States for checking the errors
  //const [submitted, setSubmitted] = useState(false);
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
        <p className="errorMessage">Incorrect username or password</p>
      </div>
    );
  };

  function CheckError(response) {
    if (response.status >= 200 && response.status <= 299) {
      console.log(response.data);
      navigate("/startpage");
    } else {
      setError(true);
      throw Error("Incorrect password");
    }
  }

  // Handling form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    //setSubmitted(true);
    setError(false);

    console.log(formData);

    AuthService.login(formData.username, formData.password)
      .then(CheckError)
      .catch((error) => {
        console.log(error);
      });

    /*
    fetch("http://localhost:8080/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then(CheckError)

    UserService.loginUser(formData)
      .then((res) => {
        CheckError(res);
      })
      .catch((error) => {
        console.log(error);
      });
      */
  };

  // handling the input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    //setSubmitted(false);
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
                <Form.Label>USERNAME</Form.Label>
                <Form.Control
                  required
                  type="username"
                  placeholder="username"
                  value={formData.username}
                  name="username"
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
