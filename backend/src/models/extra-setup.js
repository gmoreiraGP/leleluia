function applyExtraSetup(sequelize) {
  const { invoices, addresses, products } = sequelize.models

  invoices.hasMany(addresses)
  invoices.hasMany(products)
  addresses.belongsTo(invoices)
  products.belongsTo(invoices)
}

module.exports = { applyExtraSetup }
