import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Orders = sequelize.define(
  "Orders",
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
    date_of_order: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    date_of_delivery: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    measurements: {
        type: DataTypes.JSONB,
        allowNull: null,
    },
    no_of_shirts: {
        type: DataTypes.NUMBER,
        allowNull: false,
        defaultValue: 0,
    },
    no_of_pants: {
        type: DataTypes.NUMBER,
        allowNull: false,
        defaultValue: 0
    },
    is_skirt: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    no_of_skirt: {
        ype: DataTypes.NUMBER,
        allowNull: false,
        defaultValue: 0
    },
    is_halfpant: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    is_safari: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    is_policecostume: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
  },
  { tableName: "orders", timestamps: true }
);

export default Orders;
