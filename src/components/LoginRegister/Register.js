import { useState } from "react";
import { Col, Row, Form, Button, Container, InputGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./LoginRegister.css";

const Register = () => {
  // states for register
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
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
        <p className="errorMessage">
          Password is too short. Must be 4 characters or more
        </p>
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

  const handleSubmit = (e) => {
    e.preventDefault();

    //setSubmitted(true);
    setError(false);
    fetch("http://localhost:3333/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then(CheckError)
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    //setSubmitted(false);
  };

  return (
    <>
      <Container>
        <Row className="mt-5">
          <Col>
            <Form onSubmit={(e) => handleSubmit(e)}>
              <h3 className="text-success p-3 text-center">Register</h3>

              <Form.Group className="mb-3" controlId="validationCustom01">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="First Name"
                  name="firstname"
                  onChange={(e) => handleChange(e)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="validationCustom02">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Last Name"
                  value={formData.lastname}
                  name="lastname"
                  onChange={(e) => handleChange(e)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="validationCustomUsername">
                <Form.Label>Username</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Username"
                    value={formData.username}
                    name="username"
                    onChange={(e) => handleChange(e)}
                    aria-describedby="inputGroupPrepend"
                  />
                </InputGroup>
              </Form.Group>

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

              {/* Calling to error message */}
              <div className="messages">{errorMessage()}</div>

              <Form.Group className="mb-3" controlId="">
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

              <div className="d-grid gap-2">
                <Button variant="secondary" size="lg" type="submit">
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
};

export default Register;
