import  { useState } from 'react';
import PropTypes from 'prop-types'; // Importation de PropTypes

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState(''); // État pour le nom d'utilisateur

  // Gestion de la soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault(); // Empêche le rechargement de la page
    if (username.trim() !== '') {
      onSearch(username); // Appelle la fonction passée en prop avec le nom d'utilisateur
    } else {
      alert('Please enter a valid GitHub username.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username} // Lier l'état à l'input
          onChange={(e) => setUsername(e.target.value)} // Met à jour l'état à chaque modification
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

// Validation des props avec PropTypes
Search.propTypes = {
  onSearch: PropTypes.func.isRequired, // Exige que onSearch soit une fonction et obligatoire
};

export default Search;
