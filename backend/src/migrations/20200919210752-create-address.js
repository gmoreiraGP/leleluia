'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      receiverName: { type: Sequelize.STRING },
      document: { type: Sequelize.INTEGER },
      publicPlace: { type: Sequelize.STRING },
      numberPublicPlace: { type: Sequelize.STRING },
      cepPublicPlace: { type: Sequelize.INTEGER },
      setor: { type: Sequelize.STRING },
      city: { type: Sequelize.STRING },
      phone: { type: Sequelize.INTEGER },
      status: { type: Sequelize.STRING },
      invoiceID: {
        type: Sequelize.INTEGER,
        references: { model: 'Invoices', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Addresses')
  }
}
