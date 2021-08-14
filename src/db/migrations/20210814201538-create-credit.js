
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'credits',
      { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        card_id:{
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'cards', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        date: {
          type: Sequelize.DATEONLY,
          allowNull: false,
        },
        value:{
          type: Sequelize.REAL,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      },
    ); 
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('credits');
  }
};