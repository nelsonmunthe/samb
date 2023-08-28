const { DataTypes } = require('sequelize');
const db = require('../configDb/configDb');

const SupplierModel = db.define(
  'supplier',
  {
    SupplierPK: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
    },
    suppliername: {
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
  SupplierModel
};
