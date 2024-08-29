const express = require('express');
const {
    getSuppliers,
    getSupplierById,
    createSupplier,
    updateSupplier,
    deleteSupplier,
} = require('../controllers/supplierController');
const auth = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', auth, getSuppliers);
router.get('/:id', auth, getSupplierById);
router.post('/', auth, createSupplier);
router.put('/:id', auth, updateSupplier);
router.delete('/:id', auth, deleteSupplier);

module.exports = router;
