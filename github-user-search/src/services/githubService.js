const API_URL = 'https://api.github.com';
const API_KEY =import.meta.env.REACT_APP_GITHUB_API_KEY; // Assurez-vous que cette variable est configurée dans .env

export const fetchGitHubData = async (endpoint) => {
  try {
    const response = await fetch(`${API_URL}/${endpoint}`, {
      headers: {
        Authorization: `token ${API_KEY}`, // Inclut le token si nécessaire
      },
    });

    if (!response.ok) {
      throw new Error(`GitHub API Error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching data from GitHub API:', error);
    throw error;
  }
};
