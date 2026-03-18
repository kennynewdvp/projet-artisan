const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Artisan', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nom: { type: DataTypes.STRING(255), allowNull: false },
    note: { type: DataTypes.DECIMAL(2, 1), allowNull: true },
    specialite_id: { type: DataTypes.INTEGER, allowNull: true }, // Le lien vers la spécialité
    lieu: { type: DataTypes.STRING(255), allowNull: true },
    a_propos: { type: DataTypes.TEXT, allowNull: true },
    email: { type: DataTypes.STRING(255), allowNull: true },
    site_web: { type: DataTypes.STRING(255), allowNull: true },
    est_artisan_du_mois: { type: DataTypes.BOOLEAN, defaultValue: false }
  }, { tableName: 'artisans', timestamps: false });
};