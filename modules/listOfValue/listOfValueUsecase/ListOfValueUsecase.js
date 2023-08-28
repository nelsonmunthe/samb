const { ProductModel } = require("../../model/ProductModel");
const { WarehouseModel } = require("../../model/WarehouseModel");
const CustomerModel = require("../../model/CustomerModel");
const GenericResponseEntity = require("../../shared/GenericResponseEntity");
const { SupplierModel } = require("../../model/SupplierModel");
const WarehouseTransaction = require("../../model/WarehouseTransaction");
const db = require('../../configDb/configDb')
const { QueryTypes } = require('sequelize')

class ListOfValueUsecase{
    constructor(){

    };

    async getWarehouses(){
        const response = new GenericResponseEntity()
        try {
            const wareHouse = await WarehouseModel.findAll();
            if(!wareHouse) return response.errorResponse('Ware house not found', 400, null);

            return response.successResponse('Succed Get Warehouse', 200, wareHouse)
        } catch (error) {
            return response.errorResponse('failed get Warehouse', 400, null)
        }
    }

    async getProducts(){
        const response = new GenericResponseEntity()
        try {
            const producst = await ProductModel.findAll();
            if(!producst) return response.errorResponse('products not found', 400, null);

            return response.successResponse('Succed Get producst', 200, producst)
        } catch (error) {
            return response.errorResponse('failed get products', 400, null)
        }
    }

    async getCustomers(){
        const response = new GenericResponseEntity()
        try {
            const costumers = await CustomerModel.findAll();
            if(!costumers) return response.errorResponse('costumer not found', 400, null);

            return response.successResponse('Succed Get costumers', 200, costumers)
        } catch (error) {
            return response.errorResponse('failed get costumers', 400, null)
        }
    }

    async getSuppliers(){
        const response = new GenericResponseEntity()
        try {
            const suppliers = await SupplierModel.findAll();
            if(!suppliers) return response.errorResponse('Ware house not found', 400, null);

            return response.successResponse('Succed Get suppliers', 200, suppliers)
        } catch (error) {
            return response.errorResponse('failed get suppliers', 400, null)
        }
    }

    async getReport(){
        const response = new GenericResponseEntity()
        try {
            const selectQuery = `
                select 
                    w.whsname,
                    p.productname,
                    wt.total_dus,
                    wt.total_pcs
                from warehouse_transaction wt
                join warehouse w 
                on wt.warehouse_id = w.whspk 
                join  product p 
                on wt.product_id = p.productpk
                group  by 1,2,3,4
            `
            const reports = await db.query(selectQuery, {
                replacements: {},
                type: QueryTypes.SELECT,
                raw: true,
          });
            if(!reports) return response.errorResponse('Ware house not found', 400, null);

            return response.successResponse('Succed Get reports', 200, reports)
        } catch (error) {
            return response.errorResponse('failed get reports', 400, null)
        }
    }

};

module.exports = ListOfValueUsecase;