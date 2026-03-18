const BASE_URL = 'http://localhost:5000/api';

// Récupérer les catégories pour le Header
export const getCategories = async () => {
    try {
        const response = await fetch(`${BASE_URL}/categories`);
        return await response.json();
    } catch (error) {
        console.error("Erreur catégories:", error);
        return [];
    }
};

// Récupérer les artisans pour la Home Page
export const getArtisans = async () => {
    try {
        const response = await fetch(`${BASE_URL}/artisans`);
        return await response.json();
    } catch (error) {
        console.error("Erreur artisans:", error);
        return [];
    }
};

// Récupérer un artisan spécifique par son ID
export const getArtisanById = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/artisans/${id}`);
        const data = await response.json();

        // --- CORRECTION MAJEURE ---
        // Ta capture d'écran montre que le serveur renvoie un tableau [ {...} ]
        // Si c'est un tableau, on extrait le premier élément pour avoir l'objet direct
        if (Array.isArray(data) && data.length > 0) {
            return data[0]; 
        }
        
        return data; // Si c'est déjà un objet, on le renvoie tel quel
    } catch (error) {
        console.error("Erreur getArtisanById:", error);
        return null;
    }
};