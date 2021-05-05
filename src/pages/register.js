import React from "react";
import { Form, Input, Button } from "../components/common";

const Register = () => {
  const onSubmit = e => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={onSubmit}>
      <Input placeholder="email" type="email" required />
      <Input placeholder="password" type="password" required minLength={3} />
      <Input
        placeholder="confirm password"
        type="password"
        required
        minLength={3}
      />
      <Button type="submit" block>
        Register
      </Button>
    </Form>
  );
};

export default Register;
