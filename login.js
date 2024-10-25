import React, { useState } from 'react';

const LoginPage = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'user' && password === 'password') {
      setIsAuthenticated(true);
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  const handleGoogleLogin = () => {
    alert("Google Login is not yet implemented.");
  };

  return (
    <div className="login-page">
      <header className="login-header">
      </header>

      <div className="login-container">
        <h2>Welcome Back!</h2>
        <p>Please log in to continue</p>

        <form onSubmit={handleLogin} className="login-form">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="login-input"
            placeholder="Enter your username"
          />

          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="login-input"
            placeholder="Enter your password"
          />

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="login-button">Login</button>
          <button onClick={handleGoogleLogin} type="button" className="google-login-button">
            Login with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
