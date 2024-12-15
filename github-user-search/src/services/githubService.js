import axios from 'axios';

const API_URL = 'https://api.github.com/search/users';

// Fetch data based on username, location, and minRepos
export const fetchUserData = async (username, location, minRepos) => {
  try {
    let query = `in:login ${username}`;

    // Add location and minimum repositories to the query if they are provided
    if (location) query += ` location:${location}`;
    if (minRepos > 0) query += ` repos:>=${minRepos}`;

    const response = await axios.get(API_URL, {
      params: { q: query },
    });

    return response.data; // Return the search results
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};
