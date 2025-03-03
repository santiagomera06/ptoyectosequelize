'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rol extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      rol.hasMany(models.Usuario, { foreignKey: 'rolId',as:'Usuarios' });
    }
  }
  rol.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'rol',
  });
  return rol;
};