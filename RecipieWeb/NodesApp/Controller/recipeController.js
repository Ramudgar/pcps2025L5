const recepies = [
  {
    id: 1,
    name: "Chicken Curry",
    description: "This is a delicious chicken curry recipe",
    ingredients: ["Chicken", "Tomato", "Onion", "Ginger", "Garlic"],
  },
  {
    id: 2,
    name: "Chicken Biryani",
    description: "This is a delicious chicken biryani recipe",
    ingredients: ["Chicken", "Rice", "Onion", "Ginger", "Garlic"],
  },
];

// get all recepies
// GET /api/v1/recepies
const getRecipes = (req, res) => {
  res.status(200).json({
    message: "Recepies data",
    recepies,
  });
};

// get single recepie
// GET /api/v1/recepies/:id
const getRecipe = (req, res) => {
  const recepieId = req.params.id;
  const recepie = recepies.find(
    (recepie) => recepie.id === parseInt(recepieId)
  );
  if (recepie) {
    res.status(200).json({
      message: "Recepie data",
      recepie,
    });
  } else {
    res.status(404).json({
      message: "Recepie not found",
    });
  }
};

// create recepie
// POST /api/v1/recepies
const createRecipe = (req, res) => {
  const { name, description, ingredients } = req.body;
  const recepie = {
    id: recepies.length + 1,
    name,
    description,
    ingredients,
  };
  recepies.push(recepie);
  res.status(201).json({
    message: "Recepie created",
    recepie,
  });
};

// update recepie
// PUT /api/v1/recepies/:id
const updateRecipe = (req, res) => {
  const recepieId = req.params.id;
  const recepie = recepies.find(
    (recepie) => recepie.id === parseInt(recepieId)
  );
  if (recepie) {
    const { name, description, ingredients } = req.body;
    recepie.name = name;
    recepie.description = description;
    recepie.ingredients = ingredients;
    res.status(200).json({
      message: "Recepie updated",
      recepie,
    });
  } else {
    res.status(404).json({
      message: "Recepie not found",
    });
  }
};

// delete recepie
// DELETE /api/v1/recepies/:id
const deleteRecipe = (req, res) => {
  const recepieId = req.params.id;
  const recepieIndex = recepies.findIndex(
    (recepie) => recepie.id === parseInt(recepieId)
  );
  if (recepieIndex !== -1) {
    recepies.splice(recepieIndex, 1);
    res.status(200).json({
      message: "Recepie deleted",
    });
  } else {
    res.status(404).json({
      message: "Recepie not found",
    });
  }
};

// delete all recepies
// DELETE /api/v1/recepies
const deleteRecipes = (req, res) => {
  recepies.splice(0, recepies.length);
  res.status(200).json({
    message: "Recepies deleted",
  });
};

module.exports = {
  getRecipes,
  getRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  deleteRecipes,
};
