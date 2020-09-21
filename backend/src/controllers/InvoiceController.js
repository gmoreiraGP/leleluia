const database = require('../models')

class InvoiceController {
  static async index(req, res) {
    try {
      const getAll = await database.Invoice.findAll()
      return res.status(200).json(getAll)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async store(req, res) {
    const newInvoice = req.body
    try {
      const newInvoiceCreated = await database.Invoice.create(newInvoice)
      return res.status(200).json(newInvoiceCreated)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async getById(req, res) {
    const { id } = req.params
    try {
      const oneId = await database.Invoice.findOne({
        where: {
          Invoice: Number(id)
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
      const oneNumberNote = await database.Invoice.findOne({
        where: {
          Invoice: Number(numberNote)
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
      await database.Invoice.update(newInfo, { where: { id: Number(id) } })
      const invoiceUpdated = await database.Invoice.findOne({
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
      await database.Invoice.destroy({ where: { id: Number(id) } })
      return res
        .status(200)
        .json({ mensagem: `Nota fiscal com ${id} deletada com sucesso` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = InvoiceController
