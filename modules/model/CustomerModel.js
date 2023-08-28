const { DataTypes } = require('sequelize');
const db = require('../configDb/configDb');

const CustomerModel = db.define(
  'customer',
  {
    customerpk: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
    },
    customername: {
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

module.exports = CustomerModel
