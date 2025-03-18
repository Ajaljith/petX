import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Styled Components
const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("/src/assets/background14.jpg") no-repeat center center fixed; /* Add your background image path here */
  background-size: cover; /* Ensure the image covers the entire page */
`;

const LoginWrapper = styled.div`
  max-width: 400px; /* Adjusted to fit the larger padding */
  margin: 7rem; /* 10rem margin on all sides */
  padding: 7rem; /* 10rem padding on all sides */
  border: 1px solid hsl(var(--divider));
  border-radius: 1rem;
  background: hsla(0, 0.00%, 100.00%, 0.32); /* Semi-transparent white background for the form */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h1 {
    text-align: center;
    margin-bottom: 1.5rem;
    font-size: 2.5rem; /* Increased font size for better proportion */
  }

  .form-group {
    margin-bottom: 1.5rem; /* Slightly increased margin for better spacing */

    label {
      display: block;
      margin-bottom: 0.75rem; /* Increased margin for better spacing */
      font-size: 1.25rem; /* Increased font size for better proportion */
    }

    input {
      width: 100%;
      padding: 0.75rem; /* Increased padding for better proportion */
      border: 1px solid hsl(var(--divider));
      border-radius: 0.5rem;
      font-size: 1rem; /* Adjusted font size */
    }
  }

  button {
    width: 100%;
    padding: 1rem; /* Increased padding for better proportion */
    background-color: hsl(var(--orange));
    color: hsl(var(--white));
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    font-size: 1.25rem; /* Increased font size for better proportion */
    font-weight: 700;

    &:hover {
      opacity: 0.9;
    }
  }

  p {
    text-align: center;
    margin-top: 1.5rem; /* Increased margin for better spacing */
    font-size: 1.25rem; /* Increased font size for better proportion */

    a {
      color: hsl(var(--orange));
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", { email, password });
  };

  return (
    <PageWrapper>
      <LoginWrapper>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
        <p>
          <Link to="/forgot-password">Forgot Password?</Link>
        </p>
      </LoginWrapper>
    </PageWrapper>
  );
};

export default Login;