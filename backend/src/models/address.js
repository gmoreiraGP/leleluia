'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define(
    'Address',
    {
      receiverName: DataTypes.STRING,
      document: DataTypes.INTEGER,
      publicPlace: DataTypes.STRING,
      numberPublicPlace: DataTypes.STRING,
      cepPublicPlace: DataTypes.INTEGER,
      setor: DataTypes.STRING,
      city: DataTypes.STRING,
      phone: DataTypes.INTEGER,
      status: DataTypes.STRING
    },
    {}
  )
  Address.associate = function (models) {
    Address.belongsTo(models.Invoice, {
      foreignKey: 'invoiceID'
    })
  }

  return Address
}
