const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_GITHUB_API_KEY;


export const fetchGitHubData = async (endpoint) => {
  try {
    const response = await fetch(`${API_URL}/${endpoint}`, {
      headers: {
        Authorization: `token ${API_KEY}`, // Si un token est nécessaire
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data from GitHub API');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
