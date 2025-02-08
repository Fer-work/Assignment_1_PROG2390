const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Inventory extends Model {}

Inventory.init(
  {
    inventory_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
    price: {
      type: DataTypes.DOUBLE,
    },
    description: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    timestamps: true,
    modelName: "Inventory",
  }
);

module.exports = Inventory;
