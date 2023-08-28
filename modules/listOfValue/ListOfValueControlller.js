const { httpResponse } = require("../shared/response");
const ListOfValueUsecase = require('./listOfValueUsecase/ListOfValueUsecase')

class ListOfValueController{
    constructor(){
        this.listOfValueUsecase = new ListOfValueUsecase()
    }

    async getCustomers(req, res, next){
        httpResponse(await this.listOfValueUsecase.getCustomers(req), res)
    }

    async getSuppliers(req, res, next){
        httpResponse(await this.listOfValueUsecase.getSuppliers(req), res)
    }

    async getWarehouses(req, res, next){
        httpResponse(await this.listOfValueUsecase.getWarehouses(req), res)
    }

    async getProducts(req, res, next){
        httpResponse(await this.listOfValueUsecase.getProducts(req), res)
    }

    async getReport(req, res, next){
        httpResponse(await this.listOfValueUsecase.getReport(req), res)
    }
};

module.exports = ListOfValueController;