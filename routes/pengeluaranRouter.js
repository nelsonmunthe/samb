const express = require('express');
const PengeluaranBarangController = require('../modules/pengeluaranBarang/PengeluaranBarangController');

const router = express.Router();

router.get('/get-pengeluaran-barang', async(req, res, next) => {
    try {
        await new PengeluaranBarangController().getPengeluaran(req, res, next)
    } catch (error) {
        next(error)
    }
});

router.post('/post-pengeluaran-barang',  async(req, res, next) => {
    try {
        await new PengeluaranBarangController().postPengeluaran(req, res, next)
    } catch (error) {
        next(error)
    }
});

module.exports = router;