'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: { type: Sequelize.STRING },
      quantity: { type: Sequelize.INTEGER },
      invoiceID: {
        type: Sequelize.INTEGER,
        references: { model: 'Invoice', key: 'id' }
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Products')
  }
}
