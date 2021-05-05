import React, { useState, useContext } from "react";
import { Form, Input, Button, ErrorMessage } from "../components/common";
import { FirebaseContext } from "../components/Firebase";

const Register = () => {
  const { firebase } = useContext(FirebaseContext);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = e => {
    e.preventDefault();

    if (formValues.password === formValues.confirmPassword) {
      firebase
        .register({
          email: formValues.email,
          password: formValues.password,
        })
        .catch(err => {
          setErrorMessage(err.message);
        });
    } else {
      setErrorMessage("Password and confirm password fields must match");
    }
  };

  const onChange = e => {
    setErrorMessage("");
    setFormValues(currentValues => ({
      ...currentValues,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Form onSubmit={onSubmit}>
      <Input
        onChange={onChange}
        placeholder="email"
        type="email"
        name="email"
        value={formValues.email}
        required
      />
      <Input
        onChange={onChange}
        placeholder="password"
        type="password"
        required
        minLength={3}
        name="password"
        value={formValues.password}
      />
      <Input
        onChange={onChange}
        placeholder="confirm password"
        type="password"
        required
        minLength={3}
        name="confirmPassword"
        value={formValues.confirmPassword}
      />
      {!!errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <Button type="submit" block>
        Register
      </Button>
    </Form>
  );
};

export default Register;
