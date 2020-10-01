'use strict'
const { DataTypes } = require('sequelize')

module.exports = sequelize => {
  const Invoices = sequelize.define(
    'Invoices',
    {
      companyName: DataTypes.STRING,
      numberNote: DataTypes.STRING,
      document: DataTypes.INTEGER,
      emission: DataTypes.DATE,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    },
    {}
  )

  return Invoices
}
