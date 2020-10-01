const { Router } = require('express')
const authMiddleware = require('../middlewares/auth')
const InvoiceController = require('../controllers/InvoiceController.js')

const router = Router()

router.get('/invoice', authMiddleware, InvoiceController.index)
router.post('/invoice', authMiddleware, InvoiceController.store)
router.get('/invoice/:id', authMiddleware, InvoiceController.getById)
router.get('/invoice/:numberNote', InvoiceController.getInvoice)
router.put('/invoice/:id', authMiddleware, InvoiceController.update)
router.delete('/invoice/:id', authMiddleware, InvoiceController.delete)

module.exports = router
