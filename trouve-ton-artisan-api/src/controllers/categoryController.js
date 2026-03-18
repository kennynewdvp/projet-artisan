const db = require('../models');

// Logique pour récupérer toutes les catégories
exports.findAll = async (req, res) => {
  try {
    const categories = await db.Category.findAll();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération des catégories" });
  }
};