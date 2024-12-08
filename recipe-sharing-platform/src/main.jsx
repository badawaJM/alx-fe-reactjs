import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import './index.css';
import RecipeDetail from './components/RecipeDetail'
import HomePage from './components/HomePage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Define Routes */}
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="recipe/:id" element={<RecipeDetail/>} />
        </Route>
      </Routes>
    </Router>
    <Routes>
</Routes>
  </React.StrictMode>
);
