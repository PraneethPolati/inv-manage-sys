const Supplier = require('../models/Supplier');
const { validationResult } = require('express-validator');

exports.getSuppliers = async (req, res) => {
    try {
        const suppliers = await Supplier.find().populate('products');
        res.json(suppliers);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.getSupplierById = async (req, res) => {
    try {
        const supplier = await Supplier.findById(req.params.id).populate('products');

        if (!supplier) {
            return res.status(404).json({ msg: 'Supplier not found' });
        }

        res.json(supplier);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.createSupplier = async (req, res) => {
    const { name, contact_info, products } = req.body;

    try {
        let supplier = new Supplier({
            name,
            contact_info,
            products,
        });

        await supplier.save();
        res.json(supplier);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.updateSupplier = async (req, res) => {
    const { name, contact_info, products } = req.body;

    const supplierFields = {
        name,
        contact_info,
        products,
    };

    try {
        let supplier = await Supplier.findById(req.params.id);

        if (!supplier) {
            return res.status(404).json({ msg: 'Supplier not found' });
        }

        supplier = await Supplier.findByIdAndUpdate(
            req.params.id,
            { $set: supplierFields },
            { new: true }
        );

        res.json(supplier);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.deleteSupplier = async (req, res) => {
    try {
        let supplier = await Supplier.findById(req.params.id);

        if (!supplier) {
            return res.status(404).json({ msg: 'Supplier not found' });
        }

        await Supplier.findByIdAndDelete(req.params.id);

        res.json({ msg: 'Supplier removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
