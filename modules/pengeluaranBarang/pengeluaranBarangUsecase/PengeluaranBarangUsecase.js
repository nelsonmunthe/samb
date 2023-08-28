const PengerluaranHeaderModel = require("../../model/PengeluaranHeaderModel");
const GenericResponseEntity = require("../../shared/GenericResponseEntity");
const db = require('../../configDb/configDb');
const PengerluaranDetailModel = require("../../model/PengeluaranDetailMode");
const { ProductModel } = require("../../model/ProductModel");
const WarehouseTransaction = require('../../model/WarehouseTransaction')
const moment = require('moment');

class PengeluaranBarangUsecase{
    constructor(){
        this.transaction = null;
    };

    async getPengeluaran(){
        const response = new GenericResponseEntity()
        try {
            const barangKeluar = await PengerluaranHeaderModel.findAll();
            if(!barangKeluar) return response.errorResponse('Barang keluar not found', 400, null);

            return response.successResponse('Succed Get barang Keluar', 200, barangKeluar)
        } catch (error) {
            return response.errorResponse('failed get barang Keluar', 400, null)
        }

    }

    async postPengeluaran(req){
        const response = new GenericResponseEntity()
        this.transaction = await db.transaction();
        try {
            req.body.header.trxoutno = `${req.body.header.whsidf}-${req.body.header.detail[0].trxoutdproductidf}-${moment().format('DD-MM-YYYY mm:ss')}`
            const header = await PengerluaranHeaderModel.create(req.body.header, {transaction: this.transaction});

    
            if(header){
                for (let pengeluaran of req.body.header.detail){
                    pengeluaran.trxoutidf = header.trxoutpk;
                    
                    const detail = await PengerluaranDetailModel.create(pengeluaran, {transaction: this.transaction});

                    const wh_transaction = await WarehouseTransaction.findOne({
                        where: {
                            warehouse_id: header.whsidf,
                            product_id: header.trxoutsuppidf
                        }
                    });
        
                    if(!wh_transaction) return response.errorResponse('Product not found', 400, null)

                    if(wh_transaction.total_dus < pengeluaran.trxoutdqtydus)  return response.errorResponse('product not enaugh', 400, null)
        
                    await WarehouseTransaction.update(
                        {
                            total_dus: wh_transaction.total_dus -  pengeluaran.trxoutdqtydus,
                            total_pcs: wh_transaction.total_pcs - pengeluaran.trxoutdqtypcs
                        },
                        {
                            where: {
                                warehouse_id: header.whsidf,
                                product_id: header.trxoutsuppidf
                            },
                            transaction: this.transaction
                        }
                    )

                }
               
            };

            await  this.transaction.commit();
            return response.successResponse('Succeed Transaction Pemasukan Brang', 202, header)
            
        } catch (error) {
            await this.transaction.rollback();
            return response.errorResponse(error.message, 404, null);
        }
        
    }

};

module.exports = PengeluaranBarangUsecase;