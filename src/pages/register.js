import React, { useState } from "react";
import { Form, Input, Button } from "../components/common";

const Register = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const onSubmit = e => {
    e.preventDefault();

    console.log("test", formValues);
  };

  const onChange = e => {
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
      <Button type="submit" block>
        Register
      </Button>
    </Form>
  );
};

export default Register;
