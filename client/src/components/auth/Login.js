import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";

import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../layout/FormContainer";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";


const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <FormContainer>
        <h1>Login</h1>
        <Form onSubmit={(e) => onSubmit(e)}>
          <Form.Group>
            <Form.Control
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
              minLength="6"
            />
          </Form.Group>

        <input type="submit" className="btn btn-primary" value="Login" />
        </Form>
        <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
      </FormContainer>
  
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
