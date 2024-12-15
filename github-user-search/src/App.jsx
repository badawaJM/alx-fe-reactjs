import { useState } from 'react';
import { fetchUserData } from './services/githubService';

const App = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const data = await fetchUserData(username); // Appel API
      setUserData(data);
      setError(null); // Réinitialiser l'erreur
    } catch  {
      setError('Failed to fetch user data. Please check the username.');
      setUserData(null);
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {userData && (
        <div>
          <h2>{userData.name}</h2>
          <p>{userData.bio}</p>
          <img src={userData.avatar_url} alt={`${userData.name}'s avatar`} width="100" />
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default App;
