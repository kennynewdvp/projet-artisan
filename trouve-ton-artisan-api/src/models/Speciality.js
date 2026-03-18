const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Speciality', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nom: { type: DataTypes.STRING(255), allowNull: false },
    category_id: { type: DataTypes.INTEGER, allowNull: false }
  }, { tableName: 'specialities', timestamps: false });
};