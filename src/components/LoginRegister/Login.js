import { useState } from "react";
import { Col, Row, Form, Button, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../services/AuthService";
import UserService from "../../services/UserService";
import "./LoginRegister.css";
import axios from "axios";

const Login = () => {
  //states for login
  const [formData, setFormData] = useState({
    username: "", // required
    password: "", // required
  });
  const [formData2, setFormData2] = useState({
    forgotusername: "",
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
      navigate("/startpage");
    } else {
      setError(true);
      throw Error("Incorrect password");
    }
  }

  const forgetPassword = (e) => {
    return axios.post(
      "http://localhost:8080/forgotPassword/" + formData2.forgotusername,
      {
        withCredentials: true,
      }
    );
  };

  // Handling form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    //setSubmitted(true);
    setError(false);

    AuthService.login(formData)
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
  const handleChange2 = (e) => {
    setFormData2({ ...formData2, [e.target.name]: e.target.value });
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
                  placeholder="Username"
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
                <Button
                  variant="success"
                  size="sm"
                  data-cy="loginbtn"
                  type="submit"
                >
                  Login
                </Button>
              </div>

              <Link to="/register">
                <div className="d-grid gap-2 mt-3">
                  <Button
                    variant="secondary"
                    size="sm"
                    data-cy="regbtn"
                    type="submit"
                  >
                    Register
                  </Button>
                </div>
              </Link>
            </Form>

            <Form.Control
              required
              type="forgotusername"
              placeholder="forgotusername"
              value={formData2.forgotusername}
              name="forgotusername"
              onChange={(e) => handleChange2(e)}
              style={{ margintop: "2px" }}
            />
            <div className="d-grid gap-2 mt-3">
              <Button
                variant="success"
                size="sm"
                type="submit"
                onClick={forgetPassword}
              >
                Forgot Password
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
