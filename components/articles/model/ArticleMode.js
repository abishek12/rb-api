import { DataTypes, Model } from "sequelize";
import database from "../../database/Database.js";

class ArticleModel extends Model {}

ArticleModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        max: 255,
      },
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        max: 300,
      },
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    author_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    featured_image: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    expert: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        max: 255,
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize: database.sequelize,
    tableName: "article",
    freezeTableName: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    timestamps: true,
  }
);

export default ArticleModel;
