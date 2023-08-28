const express = require('express');
const PenerimaanBarangController = require('../modules/penerimaanBarang/PenerimaanBarangController');

const router = express.Router();

router.get('/get-penerimaan-barang', async(req, res, next) => {
    try {
        await new PenerimaanBarangController().getPenerimaan(req, res, next)
    } catch (error) {
        next(error)
    }
});

router.post('/post-penerimaan-barang',  async(req, res, next) => {
    try {
        await new PenerimaanBarangController().postPenerimaan(req, res, next)
    } catch (error) {
        next(error)
    }
});

module.exports = router;