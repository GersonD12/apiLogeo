'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ciudad: {
        type: Sequelize.STRING,
        allowNull: false
      },
      direccion_entrega: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cod_postal: {
        type: Sequelize.STRING,
        allowNull: false
      },
      num_pedidos: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      nom_usuario: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      id_tipo_cliente: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'tipo_cliente',
          key: 'id'
        }
      }
    });
    
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('usuarios');
  }
};