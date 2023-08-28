const { DataTypes } = require('sequelize');
const db = require('../configDb/configDb');

const PenerimaanDetailModel = db.define(
  'penerimaanbarangdetail',
  {
    trxindpk: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
    },
    trxinidf: {
      type: DataTypes.INTEGER,
    },
    trxindproductidf: {
      type: DataTypes.INTEGER,
    },
    trxindqtydus: {
      type: DataTypes.INTEGER,
    },
    trxindqtypcs: {
      type: DataTypes.INTEGER,
    }
  },
  { 
    freezeTableName: true,
    timestamps: false 
  }
);

module.exports = PenerimaanDetailModel
