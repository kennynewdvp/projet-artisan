module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        
        // On récupère la clé depuis le fichier .env
        const secretToken = process.env.API_TOKEN; 

        if (token && token === `Bearer ${secretToken}`) {
            next();
        } else {
            // C'est ici que ton erreur 401 est générée
            res.status(401).json({ error: 'Accès non autorisé : Token invalide ou absent' });
        }
    } catch (error) {
        res.status(401).json({ error: 'Requête non authentifiée' });
    }
};