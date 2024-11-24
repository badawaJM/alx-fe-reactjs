import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import NotFound from './components/NotFound';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';

const isAuthenticated = true; // Simulated login status
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route
  path="/profile/*"
  element={
    <ProtectedRoute isAuthenticated={isAuthenticated}>
      <Profile />
    </ProtectedRoute>
  }
/>
      </Routes>
    </Router>
  );
};

export default App;
