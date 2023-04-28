'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuarios extends Model {
    static associate(models) {
      usuarios.belongsTo(models.tipo_cliente, {
        foreignKey: "id_tipo_cliente"
      })
    }
  };
  usuarios.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contra: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ciudad: {
        type: DataTypes.STRING,
        allowNull: false
    },
    direccion_entrega: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cod_postal: {
      type: DataTypes.STRING,
      allowNull: false
    },
    num_pedidos: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_tipo_cliente:{
      type: DataTypes.INTEGER,
      allowNull: false 
    },
    nom_usuario: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'usuarios',
  });
  return usuarios;
};