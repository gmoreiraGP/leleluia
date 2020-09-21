'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  const Invoice = sequelize.define(
    'Invoice',
    {
      companyName: DataTypes.STRING,
      numberNote: DataTypes.STRING,
      document: DataTypes.INTEGER,
      emission: DataTypes.DATE
    },
    {}
  )
  Invoice.associate = function (models) {
    Invoice.hasMany(models.Products, {
      foreignKey: 'invoiceID'
    })
    Invoice.hasMany(models.Address, {
      foreignKey: 'invoiceID'
    })
  }

  return Invoice
}
