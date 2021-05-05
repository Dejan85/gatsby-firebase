import React, { useState, useContext } from "react";
import { FirebaseContext } from "../components/Firebase";
// import { useAuth } from "../components/Firebase";
import { Form, Input, Button, ErrorMessage } from "../components/common";

// import { Link } from "gatsby";

// import Seo from "../components/seo";

const Login = () => {
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const { firebase } = useContext(FirebaseContext);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    firebase
      .login({ email: formValues.email, password: formValues.password })
      .catch(err => {
        setErrorMessage(err.message);
      });
  };

  const handleInputChange = e => {
    setErrorMessage("");
    setFormValues(currentValues => ({
      ...currentValues,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Input
          onChange={handleInputChange}
          placeholder="email"
          type="email"
          name="email"
          value={formValues.email}
          required
        />
        <Input
          onChange={handleInputChange}
          placeholder="password"
          type="password"
          value={formValues.password}
          name="password"
          required
        />
        <Button type="submit" block>
          Login
        </Button>
        {!!errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </Form>
    </section>
  );
};

export default Login;
