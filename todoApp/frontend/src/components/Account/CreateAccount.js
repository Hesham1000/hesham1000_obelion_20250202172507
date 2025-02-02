import React, { useState } from 'react';
import './CreateAccount.css';

const CreateAccount = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Invalid login credentials');
      }

      const data = await response.json();
      onLoginSuccess(data.token);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="account-container">
      <header className="header">
        <img src="logo-link" alt="Company Logo" className="logo" />
        <nav className="nav-tabs">
          <a href="#home">Home</a>
          <a href="#tasks">Tasks</a>
          <a href="#about">About</a>
        </nav>
      </header>
      <main className="form-fields">
        <form onSubmit={handleLogin} className="login-form">
          <h2>Log In</h2>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="login-button">
            Log In
          </button>
          <div className="additional-options">
            <a href="#forgot-password">Forgot Password?</a>
            <a href="#create-account">Create Account</a>
          </div>
        </form>
      </main>
      <footer className="footer">
        <p>© 2023 Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CreateAccount;
