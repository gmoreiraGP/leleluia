'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define(
    'Products',
    {
      name: DataTypes.STRING,
      quantity: DataTypes.INTEGER
    },
    {}
  )
  Products.associate = function (models) {
    Products.belongsTo(models.Invoice, {
      foreignKey: 'invoiceID'
    })
  }

  return Products
}
