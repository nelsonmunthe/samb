const express = require('express');
const ListOfValueControlller = require('../modules/listOfValue/ListOfValueControlller');

const router = express.Router();

router.get('/get-customer', async(req, res, next) => {
    try {
        await new ListOfValueControlller().getCustomers(req, res, next)
    } catch (error) {
        next(error)
    }
});

router.get('/get-products',  async(req, res, next) => {
    try {
        await new ListOfValueControlller().getProducts(req, res, next)
    } catch (error) {
        next(error)
    }
});

router.get('/get-warehouse',  async(req, res, next) => {
    try {
        await new ListOfValueControlller().getWarehouses(req, res, next)
    } catch (error) {
        next(error)
    }
});

router.get('/get-supplier', async(req, res, next) => {
    try {
        await new ListOfValueControlller().getSuppliers(req, res, next)
    } catch (error) {
        next(error)
    }
});

router.get('/get-report', async(req, res, next) => {
    try {
        await new ListOfValueControlller().getReport(req, res, next)
    } catch (error) {
        next(error)
    }
});

module.exports = router;