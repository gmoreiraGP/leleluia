const database = require('../models')
const bcrypt = require('bcryptjs')
const generateToken = require('../config/generateToken')

class UserController {
  static async index(req, res) {
    try {
      const getAll = await database.Users.findAll({
        attributes: {
          exclude: ['password', 'passwordResetToken', 'passwordResetExpires']
        }
      })
      return res.status(200).json(getAll)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async store(req, res) {
    const { firstName, lastName, email, password } = req.body
    try {
      const user = database.Users.create({
        firstName,
        lastName,
        email
      })

      database.Users.beforeCreate(async (user, _) => {
        const hashedPass = await bcrypt.hash(password, 10)
        user.password = hashedPass
      })
      return res.status(200).json({
        user: {
          firstName,
          lastName,
          email
        },
        token: generateToken({ id: user.id })
      })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async getById(req, res) {
    const { id } = req.params
    try {
      const oneId = await database.Users.findOne({
        where: {
          id: Number(id)
        }
      })
      return res.status(200).json(oneId)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async update(req, res) {
    const { id } = req.params
    const newInfo = req.body
    try {
      await database.Users.update(newInfo, { where: { id: Number(id) } })
      const postUpdated = await database.Users.findOne({
        where: { id: Number(id) }
      })
      return res.status(200).json(postUpdated)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async delete(req, res) {
    const { id } = req.params
    try {
      await database.Users.destroy({ where: { id: Number(id) } })
      return res.status(200).json({ mensagem: `User ${id} deletado` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = UserController
