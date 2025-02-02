import React, { createContext, useContext, useState, useEffect } from 'react';
import { Routes, Route, Navigate, Link, useNavigate } from 'react-router-dom';
import Account from './components/Account/CreateAccount';
import Task from './components/Task/CreateTask';
import Notification from './components/Notification/Notification';
import Reminder from './components/Reminder/ReminderSettings';

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [globalError, setGlobalError] = useState(null);
  const navigate = useNavigate();

  const login = (token) => {
    setIsAuthenticated(true);
    localStorage.setItem('authToken', token);
    navigate('/tasks');
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  const verifyToken = async (token) => {
    try {
      // Dummy API check, replace URL with your API endpoint
      const response = await fetch('/verify-token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token })
      });
      if (!response.ok) throw new Error('Invalid token');
      setIsAuthenticated(true);
    } catch (error) {
      setGlobalError(error.message);
      logout();
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      verifyToken(token);
    }
  }, []);

  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  const PublicRoute = ({ children }) => {
    return isAuthenticated ? <Navigate to="/tasks" /> : children;
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, globalError }}>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <nav role="navigation" style={{ padding: '1rem', borderBottom: '1px solid #ccc'}}>
          {isAuthenticated ? (
            <>
              <Link to="/tasks" style={{ marginRight: '1rem' }}>Tasks</Link>
              <Link to="/notifications" style={{ marginRight: '1rem' }}>Notifications</Link>
              <Link to="/reminders" onClick={logout}>Logout</Link>
            </>
          ) : (
            <>
              <Link to="/login" style={{ marginRight: '1rem' }}>Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </nav>
        <main style={{ flex: 1, padding: '1rem' }}>
          <Routes>
            <Route path="/tasks" element={
              <ProtectedRoute>
                <Task />
              </ProtectedRoute>
            } />
            <Route path="/notifications" element={
              <ProtectedRoute>
                <Notification />
              </ProtectedRoute>
            } />
            <Route path="/reminders" element={
              <ProtectedRoute>
                <Reminder />
              </ProtectedRoute>
            } />
            <Route path="/register" element={
              <PublicRoute>
                <Account />
              </PublicRoute>
            } />
            {/* Add the Login component path here */}
          </Routes>
          {globalError && <div style={{ color: 'red' }}>{globalError}</div>}
        </main>
        <footer style={{ padding: '1rem', textAlign: 'center', borderTop: '1px solid #ccc' }}>
          &copy; 2024 todo App. All rights reserved.
        </footer>
      </div>
    </AuthContext.Provider>
  );
};

export default App;