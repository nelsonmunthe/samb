const { DataTypes } = require('sequelize');
const db = require('../configDb/configDb');

const PenerimaanHeaderModel = db.define(
  'penerimaanbarangheader',
  {
    trxinpk: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
    },
    trxinno: {
      type: DataTypes.STRING,
    },
    whsidf: {
      type: DataTypes.INTEGER,
    },
    trxinsuppidf: {
      type: DataTypes.INTEGER,
    },
    trxinnotes: {
      type: DataTypes.STRING,
    },
    trxindate: {
      type: DataTypes.DATE,
    }
  },
  { 
    freezeTableName: true,
    timestamps: false 
  }
);

module.exports = PenerimaanHeaderModel
