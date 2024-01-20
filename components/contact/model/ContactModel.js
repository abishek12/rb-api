import { DataTypes, Model } from "sequelize";
import database from "../../database/Database.js";

class ContactModel extends Model {}

ContactModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        max: 32,
        min: 8,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        max: 50,
        min: 3,
        isEmail: true,
      },
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        max: 255,
      },
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        max: 255,
      },
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "false",
    },
  },
  {
    sequelize: database.sequelize,
    tableName: "contact",
    freezeTableName: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    timestamps: true,
  }
);

export default ContactModel;
