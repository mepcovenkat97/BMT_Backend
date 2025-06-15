import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Customer from "./Customer.js";

const Mastermeasurements = sequelize.define(
  "Master_measurements",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    customer_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references:{
        model: Customer,
        key: 'id'
      }
    },
    measurements: {
      type: DataTypes.JSONB,
      allowNull: null,
    },
  },
  { tableName: "master_measurements", timestamps: true }
);

export default Mastermeasurements;
