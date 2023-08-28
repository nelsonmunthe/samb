const { DataTypes } = require('sequelize');
const db = require('../configDb/configDb');

const WarehouseModel = db.define(
  'warehouse',
  {
    whspk: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
    },
    whsname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
    }
  },
  { 
    freezeTableName: true,
    timestamps: false 
  }
);

module.exports = {
  WarehouseModel
};
