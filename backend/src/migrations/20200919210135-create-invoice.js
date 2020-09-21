'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Invoice', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      companyName: { type: Sequelize.STRING },
      numberNote: { allowNull: false, type: Sequelize.STRING },
      document: { type: Sequelize.INTEGER },
      emission: { type: Sequelize.DATE }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Invoice')
  }
}
