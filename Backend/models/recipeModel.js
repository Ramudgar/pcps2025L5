const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./User"); // Import User Model
const Category = require("./Category"); // Import Category Model

const Recipe = sequelize.define("Recipe", {
  recipe_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  chef_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: UserAuth,
      key: "user_id"
    }
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  },
  ingredients: {
    type: DataTypes.TEXT, // Store ingredients as a JSON string or comma-separated list
    allowNull: false
  },
  instructions: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Category,
      key: "category_id"
    }
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, { timestamps: false });

module.exports = Recipe;
