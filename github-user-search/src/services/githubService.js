import axios from 'axios';

const API_URL = 'https://api.github.com';
const API_KEY = import.meta.REACT_APP_GITHUB_API_KEY; // Assurez-vous de définir cette variable dans .env

// Fonction pour obtenir les données d'un utilisateur GitHub
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${API_URL}/users/${username}`, {
      headers: {
        Authorization: `token ${API_KEY}`, // Utilisez le token si nécessaire
      },
    });

    return response.data; // Retourne les données de l'utilisateur
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

// Autres méthodes API si nécessaires
export const fetchUserRepos = async (username) => {
  try {
    const response = await axios.get(`${API_URL}/users/${username}/repos`, {
      headers: {
        Authorization: `token ${API_KEY}`,
      },
    });

    return response.data; // Retourne les dépôts de l'utilisateur
  } catch (error) {
    console.error('Error fetching user repositories:', error);
    throw error;
  }
};
