import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState(0);
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to handle form submission
  const handleSearch = async (e) => {
    e.preventDefault();

    if (username.trim() === '') {
      alert('Please enter a valid GitHub username.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setUserData([]);

    try {
      const data = await fetchUserData(username, location, minRepos);
      setUserData(data.items);
    } catch  {
      setError("Looks like we can't find any matching users.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <form onSubmit={handleSearch} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Minimum Repositories"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded">Search</button>
      </form>

      {/* Loading */}
      {isLoading && <p className="text-center mt-4">Loading...</p>}

      {/* Error */}
      {error && <p className="text-red-500 mt-4">{error}</p>}

      {/* Display user data */}
      {userData.length > 0 && (
        <div className="mt-4 space-y-4">
          {userData.map((user) => (
            <div key={user.id} className="border p-4 rounded">
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-16 h-16 rounded-full"
              />
              <h3 className="text-xl">{user.login}</h3>
              <p>{user.location || 'No location available'}</p>
              <p>Repositories: {user.public_repos}</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                View Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
