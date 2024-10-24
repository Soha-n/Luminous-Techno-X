import React, { useState } from 'react';
import LoginPage from './login';
import HomePage from './home';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track if user is authenticated

  return (
    <div>
      {isAuthenticated ? (
        <HomePage/>
      ) : (
        <LoginPage setIsAuthenticated={setIsAuthenticated} />  
      )}
    </div>
  );
};

export default App;
