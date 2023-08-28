const { DataTypes } = require('sequelize');
const db = require('../configDb/configDb');

const WarehouseTransaction = db.define(
  'warehouse_transaction',
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
    },
    warehouse_id: {
      type: DataTypes.INTEGER,
    },
    product_id: {
      type: DataTypes.INTEGER,
    },
    total_dus: {
      type: DataTypes.INTEGER,
    },
    total_pcs: {
      type: DataTypes.INTEGER,
    }
  },
  { 
    freezeTableName: true,
    timestamps: false 
  }
);

module.exports = WarehouseTransaction
