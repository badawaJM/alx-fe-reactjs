import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import './index.css';
import RecipeDetail from './components/RecipeDetail'
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import RecipeDetails from './components/RecipeDetails';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Define Routes */}
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="recipe/:id" element={<RecipeDetails />} />
        </Route>
      </Routes>
    </Router>
    <Routes>
  <Route path="/" element={<App />}>
    <Route index element={<HomePage />} />
    <Route path="about" element={<AboutPage />} />
    <Route path="recipe/:id" element={<RecipeDetail />} />
  </Route>
</Routes>
  </React.StrictMode>
);
