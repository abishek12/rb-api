import { DataTypes, Model } from "sequelize";
import database from "../../database/Database.js";

class UserModel extends Model {}

UserModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      unique: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        max: 16,
        min: 3,
      },
    },
    middleName: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        max: 16,
        min: 3,
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        max: 16,
        min: 3,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        max: 16,
        min: 3,
        isEmail: true,
      },
    },
    contact_no: {
      type: DataTypes.NUMBER,
      allowNull: false,
      validate: {
        min: 10,
        isNumeric: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "subscriber",
    },
  },
  {
    sequelize: database.sequelize,
    tableName: "user",
    freezeTableName: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    timestamps: true,
  }
);

export default UserModel;
