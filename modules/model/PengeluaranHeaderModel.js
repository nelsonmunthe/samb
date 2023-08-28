const { DataTypes } = require('sequelize');
const db = require('../configDb/configDb');

const PengerluaranHeaderModel = db.define(
  'pengeluaranbarangheader',
  {
    trxoutpk: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
    },
    trxoutno: {
      type: DataTypes.STRING,
    },
    whsidf: {
      type: DataTypes.INTEGER,
    },
    trxoutsuppidf: {
      type: DataTypes.INTEGER,
    },
    trxoutnotes: {
      type: DataTypes.STRING,
    },
    trxoutdate: {
      type: DataTypes.DATE,
    }
  },
  { 
    freezeTableName: true,
    timestamps: false 
  }
);

module.exports = PengerluaranHeaderModel
