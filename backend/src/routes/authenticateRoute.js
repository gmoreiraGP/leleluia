const { Router } = require('express')
const AuthController = require('../controllers/AuthController.js')

const router = Router()

// router.get('/users', AuthController.index)
router.post('/auth', AuthController.auth)
router.post('/forgot-password', AuthController.forgot)
router.post('/reset-password', AuthController.reset)
// router.get('/users/:id', AuthController.getById)
// router.put('/users/:id', AuthController.update)
// router.delete('/users/:id', AuthController.delete)

module.exports = router
