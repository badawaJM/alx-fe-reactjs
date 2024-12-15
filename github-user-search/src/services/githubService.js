import axios from "axios";

// Remplacez par l'URL de votre API GitHub si nécessaire
const API_URL = 'https://api.github.com/search/users';

// Fonction de recherche d'utilisateurs GitHub avec des paramètres avancés
export const searchGitHubUsers = async (username, location = '', minRepos = 0) => {
  try {
    // Construction de la requête
    let query = `q=${username}`;
    
    if (location) {
      query += `+location:${location}`; // Ajouter la localisation si fournie
    }

    if (minRepos) {
      query += `+repos:>=${minRepos}`; // Ajouter le nombre minimum de repositories si fourni
    }

    // Effectuer la requête API GitHub
    const response = await axios.get(`${API_URL}?${query}`);

    if (response.status !== 200) {
      throw new Error('Failed to fetch users from GitHub');
    }

    return response.data.items; // Retourne la liste des utilisateurs
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
