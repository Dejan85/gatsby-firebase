import React, { useState, useContext } from "react";
import { FirebaseContext } from "../components/Firebase";
import { useAuth } from "../components/Firebase";
import { Form } from "../components/common/Form";
import { Input } from "../components/common/Input";
import { Button } from "../components/common/Button";

// import { Link } from "gatsby";

// import Seo from "../components/seo";

const Login = () => {
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const { firebase } = useContext(FirebaseContext);

  const handleSubmit = e => {
    e.preventDefault();
    firebase.login({ email: formValues.email, password: formValues.password });
  };

  const handleInputChange = e => {
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
        />
        <Input
          onChange={handleInputChange}
          placeholder="password"
          type="password"
          value={formValues.password}
          name="password"
        />
        <Button type="submit" block>
          Login
        </Button>
      </Form>
    </section>
  );
};

export default Login;
