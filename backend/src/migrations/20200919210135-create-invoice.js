'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Invoices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      companyName: { type: Sequelize.STRING },
      numberNote: { allowNull: false, type: Sequelize.STRING },
      document: { type: Sequelize.INTEGER },
      emission: { type: Sequelize.DATE },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Invoices')
  }
}
