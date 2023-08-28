const PenerimaanHeaderModel = require("../../model/PenerimaanHeaderModel");
const GenericResponseEntity = require("../../shared/GenericResponseEntity");
const db = require('../../configDb/configDb');
const PenerimaanDetailModel = require("../../model/PenerimaanDetailModel");
const {ProductModel} = require("../../model/ProductModel");
const WarehouseTransaction = require('../../model/WarehouseTransaction')
const moment = require('moment');

class PenerimaanBarangUsecase{
    constructor(){
        this.transaction = null;
    };

    async getPenerimaan(){
        const response = new GenericResponseEntity()
        try {
            const barangMasuk = await PenerimaanHeaderModel.findAll();
            if(!barangMasuk) return response.errorResponse('barang masuk not found', 400, null);

            return response.successResponse('Succed Get barang masuk', 200, barangMasuk)
        } catch (error) {
            return response.errorResponse('failed get barang masuk', 400, null)
        }

    }

    async postPenerimaan(req){
        const response = new GenericResponseEntity()
        this.transaction = await db.transaction();
        try {
            
            req.body.header.trxinno = `${req.body.header.whsidf}-${req.body.header.detail[0].trxindproductidf}-${moment().format('DD-MM-YYYY mm:ss')}`
            const header = await PenerimaanHeaderModel.create(req.body.header, {transaction: this.transaction});

            if(header){
                for(let penerimaan of req.body.header.detail){
                    penerimaan.trxinidf = header.trxinpk;
                    const detail = await PenerimaanDetailModel.create(penerimaan, {transaction: this.transaction});

                    const wh_transaction = await WarehouseTransaction.findOne({
                        where: {
                            warehouse_id: header.whsidf,
                            product_id: header.trxinsuppidf
                        }
                    });
        
                    if(!wh_transaction) {
                        await WarehouseTransaction.create(
                            {
                                total_dus : penerimaan.trxindqtydus,
                                total_pcs: penerimaan.trxindqtypcs,
                                warehouse_id: header.whsidf,
                                product_id: header.trxinsuppidf
                            }, 
                            {
                                transaction: this.transaction
                            }
                        )
                    } else {
                
                        await WarehouseTransaction.update(
                            {
                                total_dus: wh_transaction.total_dus +  penerimaan.trxindqtydus,
                                total_pcs: wh_transaction.total_pcs + penerimaan.trxindqtypcs
                            },
                            {
                                where: {
                                    warehouse_id: header.whsidf,
                                    product_id: header.trxinsuppidf
                                },
                                transaction: this.transaction
                            }
                        )
                    }
                }
            };

            await  this.transaction.commit();
            return response.successResponse('Succeed Transaction Pemasukan Brang', 202, header)
            
        } catch (error) {
            console.log(error)
            await this.transaction.rollback();
            return response.errorResponse(error.message, 404, null);
        }
        
    }

};

module.exports = PenerimaanBarangUsecase;