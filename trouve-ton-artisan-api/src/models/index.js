const { Sequelize } = require('sequelize');
const path = require('path');

// 1. CONFIGURATION DE LA CONNEXION
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false, // Pour éviter de polluer le terminal avec les requêtes SQL
  }
);

// FONCTION DE TEST DE CONNEXION
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('✅ Connexion à la base de données réussie !');
  } catch (error) {
    console.error('❌ Impossible de se connecter à la base de données:', error);
  }
}
testConnection();

// 2. INITIALISATION DE L'OBJET DB
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// 3. IMPORT DES MODÈLES
// (Vérifie bien que les noms de fichiers sont exactement Category.js, Speciality.js et Artisan.js)
db.Category = require('./Category')(sequelize);
db.Speciality = require('./Speciality')(sequelize);
db.Artisan = require('./Artisan')(sequelize);

// 4. DÉFINITION DES RELATIONS (ASSOCIATIONS)

// Relation Catégorie <-> Spécialité
// Une Spécialité appartient à une Catégorie (category_id dans la table specialities)
db.Speciality.belongsTo(db.Category, { foreignKey: 'category_id', as: 'categorie' });
db.Category.hasMany(db.Speciality, { foreignKey: 'category_id' });

// Relation Spécialité <-> Artisan
// Un Artisan appartient à une Spécialité (specialite_id dans la table artisans)
db.Artisan.belongsTo(db.Speciality, { foreignKey: 'specialite_id', as: 'specialite' });
db.Speciality.hasMany(db.Artisan, { foreignKey: 'specialite_id' });

module.exports = db;