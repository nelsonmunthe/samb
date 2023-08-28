const { DataTypes } = require('sequelize');
const db = require('../configDb/configDb');

const PengerluaranDetailModel = db.define(
  'pengeluaranbarangdetail',
  {
    trxoutdpk: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
    },
    trxoutidf: {
      type: DataTypes.INTEGER,
    },
    trxoutdproductidf: {
      type: DataTypes.INTEGER,
    },
    trxoutdqtydus: {
      type: DataTypes.INTEGER,
    },
    trxoutdqtypcs: {
      type: DataTypes.INTEGER,
    }
  },
  { 
    freezeTableName: true,
    timestamps: false 
  }
);

module.exports = PengerluaranDetailModel
