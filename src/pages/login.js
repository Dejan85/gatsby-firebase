import React, { useState, useContext } from "react";
import { FirebaseContext } from "../components/Firebase";
import { useAuth } from "../components/Firebase";

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
    </section>
  );
};

export default Login;
