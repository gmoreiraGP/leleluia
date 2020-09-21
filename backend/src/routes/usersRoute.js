const { Router } = require('express')
const authMiddleware = require('../middlewares/auth')
const UserController = require('../controllers/UserController.js')

const router = Router()

router.get('/users', authMiddleware, UserController.index)
router.post('/users', UserController.store)
router.get('/users/:id', authMiddleware, UserController.getById)
router.put('/users/:id', authMiddleware, UserController.update)
router.delete('/users/:id', authMiddleware, UserController.delete)

module.exports = router
