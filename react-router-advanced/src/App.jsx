import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import About from './components/About';
import ProtectedRoute from './components/ProtectedRoute';
import BlogPost from './components/BlogPost';

const isAuthenticated = false; 

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/profile">Profil</Link>
        <Link to="/about">À propos</Link>
        <Link to="/blog/1">Blog Post 1</Link> 
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
       
        <Route 
          path="/profile/*" 
          element={<ProtectedRoute element={<Profile />} isAuthenticated={isAuthenticated} />} 
        />

        
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
