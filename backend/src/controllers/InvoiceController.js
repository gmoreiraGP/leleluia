const { models } = require('../models')

class InvoiceController {
  static async index(req, res) {
    try {
      const getAll = await models.Invoices.findAll()
      return res.status(200).json(getAll)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async store(req, res) {
    const newInvoice = req.body
    try {
      const newInvoiceCreated = await database.Invoices.create(newInvoice)
      return res.status(200).json(newInvoiceCreated)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async getById(req, res) {
    const { id } = req.params
    try {
      const oneId = await database.Invoices.findOne({
        where: {
          Invoices: Number(id)
        }
      })
      return res.status(200).json(oneId)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async getInvoice(req, res) {
    const { numberNote } = req.params
    try {
      const oneNumberNote = await database.Invoices.findOne({
        where: {
          Invoices: Number(numberNote)
        }
      })
      return res.status(200).json(oneNumberNote)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async update(req, res) {
    const { id } = req.params
    const newInfo = req.body
    try {
      await database.Invoices.update(newInfo, { where: { id: Number(id) } })
      const invoiceUpdated = await database.Invoices.findOne({
        where: { id: Number(id) }
      })
      return res.status(200).json(invoiceUpdated)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async delete(req, res) {
    const { id } = req.params
    try {
      await database.Invoices.destroy({ where: { id: Number(id) } })
      return res
        .status(200)
        .json({ mensagem: `Nota fiscal com ${id} deletada com sucesso` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = InvoiceController
