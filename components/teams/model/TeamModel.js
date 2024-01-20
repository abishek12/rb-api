import { DataTypes, Model } from "sequelize";
import database from "../../database/Database.js";

class TeamModel extends Model {}

TeamModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
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
      allowNull: true,
      unique: true,
      validate: {
        max: 16,
        min: 3,
        isEmail: true,
      },
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        max: 255,
      },
    },
  },
  {
    sequelize: database.sequelize,
    tableName: "team",
    freezeTableName: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    timestamps: true,
  }
);

export default TeamModel;
