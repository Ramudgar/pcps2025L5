const express = require("express");
const router = express.Router();
const {
  getRecipes,
  createRecipe,
  getRecipe,
  updateRecipe,
  deleteRecipe,
} = require("../Controller/recipeController");

// api endpoint for get all recipes
router.get("/", getRecipes);

// api endpoint for get single recipe
router.get("/:id", getRecipe);

// api endpoint for create recipe
router.post("/createRecipe", createRecipe);

// api endpoint for update recipe
router.put("/:id", updateRecipe);

// api endpoint for delete recipe
router.delete("/:id", deleteRecipe);


module.exports = router;