const { DataTypes } = require('sequelize');
const db = require('../configDb/configDb');

const ProductModel = db.define(
  'product',
  {
    productpk: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
    },
    productname: {
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
  ProductModel
};
