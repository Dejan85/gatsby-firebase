import React, { useState } from "react";
import Layout from "../components/layout";
import { useAuth } from "../components/Firebase";

// import { Link } from "gatsby";

// import Seo from "../components/seo";

const SecondPage = () => {
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const { firebase } = useAuth();

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
    <Layout>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInputChange}
          placeholder="email"
          type="email"
          name="email"
          value={formValues.email}
        />
        <input
          onChange={handleInputChange}
          placeholder="password"
          type="password"
          value={formValues.password}
          name="password"
        />
        <button type="submit">Login</button>
      </form>
    </Layout>
  );
};

export default SecondPage;
