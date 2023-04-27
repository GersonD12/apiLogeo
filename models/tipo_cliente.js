'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tipo_cliente extends Model {
    static associate(models) {
      tipo_cliente.hasMany(models.usuarios, {
        foreignKey: "id_tipo_cliente"
      })
    }
  };
  tipo_cliente.init({
    nombre_tipo_cliente: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'tipo_cliente',
  });
  return tipo_cliente;
};