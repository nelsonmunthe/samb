const { httpResponse } = require("../shared/response");
const PenerimaanBarangUsecase = require('./penerimaanBarangUsecase/PenerimaanBarangUsecase')

class PenerimaanBarangController{
    constructor(){
        this.penerimaanBarangUsecase = new PenerimaanBarangUsecase()
    }

    async getPenerimaan(req, res, next){
        httpResponse(await this.penerimaanBarangUsecase.getPenerimaan(req), res)
    }

    async postPenerimaan(req, res, next){
        httpResponse(await this.penerimaanBarangUsecase.postPenerimaan(req), res)
    }
};

module.exports = PenerimaanBarangController;