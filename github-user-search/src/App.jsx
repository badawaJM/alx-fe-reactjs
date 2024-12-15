import  { useState } from 'react';
import Search from './components/Search';
import { fetchGitHubData } from './services/apiService';

const App = () => {
  const [userData, setUserData] = useState(null); // État pour les données utilisateur

  // Fonction pour rechercher un utilisateur GitHub
  const handleSearch = async (username) => {
    try {
      const data = await fetchGitHubData(`users/${username}`); // Appel API
      setUserData(data); // Met à jour l'état avec les données reçues
    } catch (error) {
      console.error('Error fetching user data:', error);
      alert('Failed to fetch user data. Please try again.');
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <Search onSearch={handleSearch} />
      {userData && (
        <div>
          <h2>{userData.name}</h2>
          <p>{userData.bio}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default App;
