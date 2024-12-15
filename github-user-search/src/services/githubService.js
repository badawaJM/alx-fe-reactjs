import axios from "axios";

// L'URL de l'API GitHub pour la recherche d'utilisateurs
const API_URL = 'https://api.github.com/search/users';

// Si nécessaire, ajoutez votre token GitHub pour l'authentification (facultatif mais recommandé pour éviter les limites de requêtes)
const API_TOKEN = 'votre-token-github';  // Remplacez ceci par votre token GitHub

// Fonction pour rechercher des utilisateurs GitHub avec des paramètres avancés
export const searchGitHubUsers = async (username, location = '', minRepos = 0) => {
  try {
    // Construction de la requête
    let query = `q=${username}`;
    
    if (location) {
      query += `+location:${location}`;  // Ajouter la localisation si fournie
    }

    if (minRepos) {
      query += `+repos:>=${minRepos}`;  // Ajouter le nombre minimum de repositories si fourni
    }

    // Afficher l'URL complète pour le débogage
    console.log(`Request URL: ${API_URL}?${query}`);

    // Effectuer la requête API GitHub avec un token d'authentification dans les headers
    const response = await axios.get(`${API_URL}?${query}`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,  // Authentification avec le token
      },
    });

    // Vérifier le statut de la réponse
    if (response.status !== 200) {
      throw new Error('Failed to fetch users from GitHub');
    }

    // Retourner les utilisateurs trouvés
    return response.data.items;
  } catch (error) {
    // Gérer les erreurs d'API
    console.error('Error fetching users:', error);
    throw error;
  }
};
