import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState(''); // Stocke le nom d'utilisateur saisi
  const [userData, setUserData] = useState(null); // Stocke les données utilisateur
  const [isLoading, setIsLoading] = useState(false); // Indique si une recherche est en cours
  const [error, setError] = useState(null); // Stocke les erreurs

  // Fonction pour gérer la soumission du formulaire
  const handleSearch = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    if (username.trim() === '') {
      alert('Please enter a valid GitHub username.');
      return;
    }

    setIsLoading(true); // Active l'état de chargement
    setError(null); // Réinitialise les erreurs
    setUserData(null); // Réinitialise les données utilisateur

    try {
      const data = await fetchUserData(username); // Appel API
      setUserData(data); // Met à jour les données utilisateur
    } catch  {
      setError("Looks like we can't find the user."); // Gère les erreurs
    } finally {
      setIsLoading(false); // Désactive l'état de chargement
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {/* Indicateur de chargement */}
      {isLoading && <p>Loading...</p>}

      {/* Affichage des erreurs */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Affichage des données utilisateur */}
      {userData && (
        <div>
          <img
            src={userData.avatar_url}
            alt={`${userData.login}'s avatar`}
            width="100"
          />
          <h2>{userData.login}</h2>
          <p>{userData.bio || 'No bio available.'}</p>
          <a
            href={userData.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
