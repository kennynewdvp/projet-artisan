// On définit l'adresse qui fonctionne dans ton navigateur
const API_URL = "http://localhost:5000/api";

export const getArtisans = async () => {
    const response = await fetch(`${API_URL}/artisans`);
    return await response.json();
};

export const getArtisanById = async (id) => {
    // Cela va appeler http://localhost:5000/api/artisans/ID
    const response = await fetch(`${API_URL}/artisans/${id}`);
    return await response.json();
};