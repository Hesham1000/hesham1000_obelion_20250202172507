import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';

function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        onLoginSuccess(data.token);
      } else {
        setError(data.message || 'Invalid login credentials.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <header className="login-header">
        <img src="/path/to/logo.png" alt="Company Logo" className="logo" />
        <nav className="navigation-tabs">
          <a href="/home">Home</a>
          <a href="/tasks">Tasks</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>
      <div className="form-fields">
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="error-message">{error}</p>}
        <button onClick={handleLogin} className="login-button">
          Log In
        </button>
        <div className="additional-options">
          <a href="/forgot-password">Forgot Password?</a>
          <a href="/register">Create an Account</a>
        </div>
      </div>
      <footer className="login-footer">
        <p>&copy; 2023 My Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

Login.propTypes = {
  onLoginSuccess: PropTypes.func.isRequired,
};

export default Login;
