// On récupère l'URL de façon dynamique
// import.meta.env est spécifique à Vite. 
// Si tu utilises Create React App, utilise process.env.REACT_APP_API_URL
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export const getArtisans = async () => {
    const response = await fetch(`${API_URL}/artisans`);
    if (!response.ok) throw new Error("Erreur lors de la récupération des artisans");
    return await response.json();
};

export const getArtisanById = async (id) => {
    const response = await fetch(`${API_URL}/artisans/${id}`);
    if (!response.ok) throw new Error("Artisan non trouvé");
    return await response.json();
};