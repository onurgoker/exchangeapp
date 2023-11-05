import { DataTypes } from "sequelize";
import sequelize from "../config/database";

const Share = sequelize.define('shares', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
  }, {
    // Other model options go here
  });

export default Share;
