const db = require('../models');

// Récupérer TOUS les artisans (pour la liste)
exports.findAll = async (req, res) => {
  try {
    const artisans = await db.Artisan.findAll({
      include: [{
        model: db.Speciality,
        as: 'specialite',
        include: [{ 
          model: db.Category, 
          as: 'categorie' 
        }]
      }]
    });
    res.json(artisans);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors de la récupération des artisans" });
  }
};

// RÉCUPÉRER UN SEUL ARTISAN (pour la page détails)
exports.findOne = async (req, res) => {
  const id = req.params.id; // On récupère l'ID envoyé par React dans l'URL

  try {
    const artisan = await db.Artisan.findByPk(id, {
      include: [{
        model: db.Speciality,
        as: 'specialite',
        include: [{ 
          model: db.Category, 
          as: 'categorie' 
        }]
      }]
    });

    if (artisan) {
      res.json(artisan);
    } else {
      res.status(404).json({ message: `L'artisan avec l'id ${id} n'existe pas.` });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors de la récupération de l'artisan" });
  }
};