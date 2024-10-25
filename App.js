import React, { useState } from 'react';
import LoginPage from './login';
import HomePage from './home';
import LandingPage from './landing';
import './App.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleSignInClick = () => {
    setShowLogin(true); 
  };

  return (
    <div>
      {isAuthenticated ? (
        <HomePage />
      ) : showLogin ? (
        <LoginPage setIsAuthenticated={setIsAuthenticated} />
      ) : (
        <LandingPage onSignInClick={handleSignInClick} />
      )}
    </div>
  );
};

export default App;
