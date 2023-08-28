const { httpResponse } = require("../shared/response");
const PengeluaranBarangUsecase = require('./pengeluaranBarangUsecase/PengeluaranBarangUsecase')

class PengeluaranBarangController{
    constructor(){
        this.pengeluaranBarangUsecase = new PengeluaranBarangUsecase()
    }

    async getPengeluaran(req, res, next){
        httpResponse(await this.pengeluaranBarangUsecase.getPengeluaran(req), res)
    }

    async postPengeluaran(req, res, next){
        httpResponse(await this.pengeluaranBarangUsecase.postPengeluaran(req), res)
    }
};

module.exports = PengeluaranBarangController;