'use strict'
const { DataTypes } = require('sequelize')

module.exports = sequelize => {
  const Addresses = sequelize.define(
    'Addresses',
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

  return Addresses
}
