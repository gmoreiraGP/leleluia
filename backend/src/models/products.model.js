'use strict'
const { DataTypes } = require('sequelize')

module.exports = sequelize => {
  const Products = sequelize.define(
    'Products',
    {
      name: DataTypes.STRING,
      quantity: DataTypes.INTEGER
    },
    {}
  )

  return Products
}
