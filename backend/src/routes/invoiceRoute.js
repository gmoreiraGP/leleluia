const { Router } = require('express')
const InvoiceController = require('../controllers/InvoiceController.js')

const router = Router()

router.get('/invoice', InvoiceController.index)
router.post('/invoice', InvoiceController.store)
router.get('/invoice/:id', InvoiceController.getById)
router.get('/invoice/:numberNote', InvoiceController.getInvoice)
router.put('/invoice/:id', InvoiceController.update)
router.delete('/invoice/:id', InvoiceController.delete)

module.exports = router
